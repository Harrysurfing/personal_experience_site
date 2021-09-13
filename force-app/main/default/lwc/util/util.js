import { ShowToastEvent } from "lightning/platformShowToastEvent";

export { showToast };

const showToast = (title, message, variant, module) => {
  const evt = new ShowToastEvent({
    title,
    message,
    variant
  });
  module.dispatchEvent(evt);
};
