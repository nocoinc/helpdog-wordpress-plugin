/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { TextControl } from "@wordpress/components";

import type { BlockEditProps } from "@wordpress/blocks";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

import type { FormEmbedAttributes } from "./types";
import { useState } from "@wordpress/element";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit(props: BlockEditProps<FormEmbedAttributes>) {
	const {
		attributes: { formUrl },
		setAttributes,
	} = props;
	
	const [url, setUrl] = useState(formUrl);

	return (
		<div {...useBlockProps()}>
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
					<>
						<p>TODO: {url}</p>
						<iframe src={url} width="100%" height="500"></iframe>
					</>
				) : (
					"Enter a form URL to preview."
				)}
			</div>
		</div>
	);
}
