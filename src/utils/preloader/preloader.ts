class PreloaderClass {
  preloader: HTMLElement | null

  constructor() {
    this.preloader = document.querySelector('#app-preloader')
  }

  remove() {
    this.preloader?.style.setProperty('display', 'none')
    document.body.classList.remove('body-preloader-loading')
  }

  invoke() {
    if (!this.preloader) {
      return false
    }

    window.addEventListener('load', () => {
      setTimeout(async () => {
        await this.loaded()
        await this.afterLoaded()
        this.preloader?.classList.remove('before-load')
        this.preloader?.classList.remove('erase')
      }, 1000)
    })
  }

  private loaded() {
    return new Promise<void>((resolve, _reject) => {
      document.body.classList.remove('body-preloader-loading')
      this.preloader?.classList.add('erase')
      setTimeout(resolve, 400)
    })
  }

  private afterLoaded() {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const fadeOut = (element: HTMLElement | null) => {
      if (!element) {
        return Promise.resolve()
      }

      return new Promise<void>((resolve, _reject) => {
        let op = 1
        const timer = setInterval(function () {
          if (op <= 0.1) {
            clearInterval(timer)
            element.style.display = 'none'
            resolve()
          }

          element.style.opacity = String(op)
          element.style.filter = 'alpha(opacity=' + op * 100 + ')'
          op -= op * 0.1
        }, 10)
      })
    }

    return fadeOut(this.preloader)
  }
}

export const Preloader = new PreloaderClass()
