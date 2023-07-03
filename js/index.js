const tabsContainer = document.querySelector(".product-features__btns");


tabsContainer.addEventListener("click", activateTab)




function activateTab(e) {
    const target = e.target;
    if (!target.classList.contains("product-features__btn")) {
        return
    }
    const buttonValue = target.dataset.button
    const lastActive = document.querySelector(".product-features__btn--active")
    const lastActiveContent = document.querySelector(`.content__item--active`);

    if (!lastActive) return

    if (!lastActiveContent) return

    lastActive.classList.remove("product-features__btn--active")
    lastActiveContent.classList.remove("content__item--active")

    target.classList.add("product-features__btn--active")
    document.querySelector(`#${buttonValue}`).classList.add("content__item--active")
}