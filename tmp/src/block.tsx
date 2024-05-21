import { registerBlockType } from "@wordpress/blocks";
import { TextControl } from "@wordpress/components";
import { InspectorControls } from "@wordpress/block-editor";
import { useState } from "@wordpress/element";

interface FormEmbedAttributes {
  formUrl: string;
}

registerBlockType<FormEmbedAttributes>("helpdog-form-embed-plugin/form-embed", {
  title: "Form Embed",
  icon: "admin-post",
  category: "embed",
  attributes: {
    formUrl: {
      type: "string",
      default: "",
    },
  },
  edit: (props) => {
    const {
      attributes: { formUrl },
      setAttributes,
    } = props;
    const [url, setUrl] = useState(formUrl);

    return (
      <div>
        <InspectorControls>
          <TextControl
            label="Form URL"
            value={url}
            onChange={(newUrl) => {
              setUrl(newUrl);
              setAttributes({ formUrl: newUrl });
            }}
          />
        </InspectorControls>
        <div>
          {url ? (
            <iframe src={url} width="100%" height="500"></iframe>
          ) : (
            "Enter a form URL to preview."
          )}
        </div>
      </div>
    );
  },
  save: () => {
    // Save function not needed because we use render_callback in PHP
    return null;
  },
});
