javascript:(function() {
  var targetClass = 'inner';
  var elements = document.querySelectorAll('.' + targetClass + ' li:first-child');

  for (var i = 0; i < elements.length; i++) {
    var text = elements[i].textContent.trim();
    console.log(text);
    var modifiedText = text.replace(/[1357]/g, function(match) {
      return '<span style="color:red;">' + match + '</span>';
    });
    elements[i].innerHTML = modifiedText;
  }
})();
