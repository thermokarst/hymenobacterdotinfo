export default function ajaxErrorNew(error, flash) {
  flash.clearMessages();
  error.errors.forEach((error) => {
    const source = error.source.pointer.split('/');
    flash.error(`${source[source.length-1].replace(/([A-Z])/g, ' $1').capitalize()} - ${error.detail}`);
  });
}
