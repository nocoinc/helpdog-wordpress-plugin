import { __ } from "@wordpress/i18n";
import { useBlockProps, BlockControls } from "@wordpress/block-editor";
import {
  TextControl,
  Button,
  ToolbarGroup,
  ToolbarButton,
} from "@wordpress/components";
import { useSelect, useDispatch } from "@wordpress/data";
import { useState } from "@wordpress/element";

import "./editor.scss";

export default function FormEdit(props) {
  const {
    attributes: { formEmbedUrl },
    setAttributes,
    clientId,
  } = props;

  const [url, setUrl] = useState(formEmbedUrl);
  const [isInvalidUrl, setIsInvalidUrl] = useState(false);
  const [isEditingUrl, setIsEditingUrl] = useState(!url);

  const { selectBlock } = useDispatch("core/block-editor");

  const handleEmbed = () => {
    const embedId = url.split("/embed/f/")[1];
    if (!embedId || embedId.length !== 26) {
      setIsInvalidUrl(true);
      return;
    }

    setIsInvalidUrl(false);
    setAttributes({ formEmbedUrl: url });
    setIsEditingUrl(false);
  };

  const toggleUrlEditing = () => {
    setIsEditingUrl(!isEditingUrl);
  };

  const handleClick = () => {
    selectBlock(clientId);
  };

  return (
    <div {...useBlockProps()}>
      <BlockControls>
        <ToolbarGroup>
          <ToolbarButton
            icon="edit"
            label={__("Replace form", "helpdog")}
            onClick={toggleUrlEditing}
          />
        </ToolbarGroup>
      </BlockControls>

      {isEditingUrl ? (
        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "4px",
          }}
        >
          <b>{__("Embed Helpdog form", "helpdog")}</b>
          <p>{__("Paste a form embed URL you want to display on your site.", "helpdog")}</p>
          <TextControl
            placeholder="https://helpdog.ai/embed/f/..."
            value={url}
            onChange={(newUrl) => setUrl(newUrl)}
          />
          {isInvalidUrl && (
            <p style={{ color: "red" }}>
              {__(
                "Invalid URL. Please enter a valid form embed URL.",
                "helpdog",
              )}
            </p>
          )}
          <Button
            variant="primary"
            onClick={handleEmbed}
            style={{ marginTop: "10px" }}
          >
            {__("Embed", "helpdog")}
          </Button>
        </div>
      ) : (
        <div>
          {url ? (
            <div style={{ position: "relative" }} onClick={handleClick}>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 1,
                  cursor: "pointer",
                }}
              ></div>

              <iframe src={url} width="100%" height="500"></iframe>
            </div>
          ) : (
            __("Enter a form embed URL to preview.", "helpdog")
          )}
        </div>
      )}
    </div>
  );
}
