/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
  const button = document.createElement("button")
  button.textContent = "Удали меня"

  button.addEventListener("click", () => {
    button.remove()
  })

  document.body.append(button)
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
  const list = document.createElement("ul")

  arr.forEach((text) => {
    const item = document.createElement("li")
    item.textContent = text

    item.addEventListener("mouseover", () => {
      item.setAttribute("title", item.textContent)
    })

    list.append(item)
  })

  document.body.append(list)
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
  const link = document.createElement("a")
  link.href = "https://tensor.ru/"
  link.textContent = "tensor"

  let isClicked = false

  link.addEventListener("click", (event) => {
    if (!isClicked) {
      event.preventDefault()
      link.textContent += ` ${link.getAttribute("href")}`
      isClicked = true
    }
  })

  document.body.append(link)
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
  const list = document.createElement("ul")
  const button = document.createElement("button")
  button.textContent = "Добавить пункт"

  function addItem() {
    const item = document.createElement("li")
    item.textContent = "Пункт"
    list.append(item)
  }

  list.addEventListener("click", (event) => {
    const item = event.target.closest("li")
    if (item && list.contains(item)) {
      item.textContent += "!"
    }
  })

  button.addEventListener("click", addItem)

  addItem()
  document.body.append(list, button)
}
