import { useBlockProps } from "@wordpress/block-editor";

export default function FormSave(props) {
  const {
    attributes: { formEmbedUrl },
  } = props;

  const formEmbedId = formEmbedUrl.split("/embed/f/")[1];

  return (
    <div {...useBlockProps.save()}>
      {formEmbedId ? (
        <>
          <script src="https://sdk.helpdog.ai/v1/script.js"></script>
          <div className="hd-form-embed" data-hd-form={formEmbedId}></div>
        </>
      ) : null}
    </div>
  );
}
