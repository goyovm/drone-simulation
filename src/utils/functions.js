export const loadTextFromFile = () => {
  return new Promise((ok, error) => {
    var input = document.createElement("input");
    input.type = "file";
    input.onchange = () => {
      var fr = new FileReader();
      fr.onload = (evt) => ok(evt.target.result);
      fr.readAsText(input.files[0]);
    };
    input.click();
  });
};
