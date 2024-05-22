// import { createElement } from '@wordpress/element';
import { BlockSaveProps } from "@wordpress/blocks";
import type { FormEmbedAttributes } from "./types";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";

export default function Save(props: BlockSaveProps<FormEmbedAttributes>) {
	const {
		attributes: { formUrl },
	} = props;
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<>
				<p>TODO: {formUrl}</p>
				{formUrl ? (
					<iframe src={formUrl} width="100%" height="500"></iframe>
				) : null}
			</>
		</div>
	);
}
