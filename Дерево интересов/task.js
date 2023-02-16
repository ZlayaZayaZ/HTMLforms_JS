const elements = document.querySelectorAll('.interests.interests_active');

for (let elem of elements) {
    const childrens = elem.querySelectorAll('input')
    const parent = elem.previousElementSibling.querySelector('input')

    parent.onchange = () => {
      if (parent.checked == true) {
        for (let child of childrens) {
          child.checked = true
        }
      }
      else {
        for (let child of childrens) {
          child.checked = false
        }
      }
    }
  }
