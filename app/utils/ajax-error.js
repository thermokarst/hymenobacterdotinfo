export default function ajaxError(errors, flash) {
  flash.clearMessages();
  errors.forEach((error) => {
    console.log(error);
    flash.error(`${error.attribute.replace(/([A-Z])/g, ' $1').capitalize()} - ${error.message}`);
  });
}
