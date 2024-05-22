import { __ } from "@wordpress/i18n";
import { useBlockProps, BlockControls } from "@wordpress/block-editor";
import {
	TextControl,
	Button,
	ToolbarGroup,
	ToolbarButton,
} from "@wordpress/components";
import { useSelect, useDispatch } from "@wordpress/data";
import type { BlockEditProps } from "@wordpress/blocks";
import type { FormEmbedAttributes } from "./types";
import { useState } from "@wordpress/element";
import "./editor.scss";

export default function Edit(props: BlockEditProps<FormEmbedAttributes>) {
	const {
		attributes: { formUrl },
		setAttributes,
		clientId,
	} = props;

	const [url, setUrl] = useState(formUrl);
	const [isEditingUrl, setIsEditingUrl] = useState(!url);

	// const { isSelected } = useSelect(
	//     (select) => ({
	//         isSelected: select('core/block-editor').isBlockSelected(clientId),
	//     }),
	//     [clientId]
	// );
	const { selectBlock } = useDispatch("core/block-editor");

	const handleEmbed = () => {
		setAttributes({ formUrl: url });
		setIsEditingUrl(false);
	};

	const toggleUrlEditing = () => {
		setIsEditingUrl(!isEditingUrl);
	};

	const handleClick = () => {
		// if (!isSelected) {
		selectBlock(clientId);
		console.log("Block selected", clientId);
		// }
	};

	return (
		<div {...useBlockProps()}>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon="edit"
						label={__("Edit URL", "helpdog-form-embed")}
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
					<h2>
						<span role="img" aria-label="form">
							📝
						</span>{" "}
						Form URL
					</h2>
					<p>Paste a link to the content you want to display on your site.</p>
					<TextControl
						placeholder={__("Enter URL to embed here...", "helpdog-form-embed")}
						value={url}
						onChange={(newUrl) => setUrl(newUrl)}
					/>
					<Button
						variant="primary"
						onClick={handleEmbed}
						style={{ marginTop: "10px" }}
					>
						{__("Embed", "helpdog-form-embed")}
					</Button>
				</div>
			) : (
				<div>
					{formUrl ? (
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

							<iframe
								src={formUrl}
								width="100%"
								height="500"
								title="Embedded Form"
							></iframe>
						</div>
					) : (
						__("Enter a form URL to preview.", "helpdog-form-embed")
					)}
				</div>
			)}
		</div>
	);
}
