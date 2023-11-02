import { FC } from 'react'

export const AppFooter: FC = () => {
  return (
    <footer className="pt-[80px]">
      <div className="container">
        <div className="rounded-t-24 bg-gray pb-[80px] pt-[120px]">
          <div className="mx-auto max-w-[570px]">
            <h3 className="mx-auto mb-40 max-w-[465px] text-center text-[72px] font-semibold">
              Есть проект?
            </h3>
            <button className="mx-auto mb-80 flex w-full max-w-[465px] items-center justify-between rounded-full bg-white/5 px-38 py-24 pr-24">
              <span className="block text-[40px] font-medium leading-none">
                Свяжитесь с нами
              </span>
              <span className="flex h-40 w-40 flex-shrink-0 items-center justify-center rounded-[100%] bg-green">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="20"
                  viewBox="0 0 17 20"
                  fill="none"
                >
                  <path
                    d="M1.5 8.75C0.809644 8.75 0.25 9.30964 0.25 10C0.25 10.6904 0.809644 11.25 1.5 11.25V8.75ZM16.3839 10.8839C16.872 10.3957 16.872 9.60427 16.3839 9.11612L8.42893 1.16117C7.94078 0.67301 7.14932 0.67301 6.66117 1.16117C6.17301 1.64932 6.17301 2.44078 6.66117 2.92893L13.7322 10L6.66117 17.0711C6.17301 17.5592 6.17301 18.3507 6.66117 18.8388C7.14932 19.327 7.94078 19.327 8.42893 18.8388L16.3839 10.8839ZM1.5 11.25H15.5V8.75H1.5V11.25Z"
                    fill="#1D2020"
                  />
                </svg>
              </span>
            </button>
            <div className="mx-auto mb-80 max-w-[485px]">
              <address className="mb-40">
                <p className="mb-10 text-center not-italic text-medium-24">
                  info@webtouch.com
                </p>
                <p className="text-center not-italic text-medium-24">
                  г. Москва, ул. Пушкина 24
                </p>
              </address>
              <nav>
                <ul className="flex items-center justify-between">
                  <li className="transition text-medium-24 hover:text-green active:translate-y-1 active:text-green-button-pressed">
                    <a className="p-5" href="/" target="_blank">
                      Telegram
                    </a>
                  </li>
                  <li className="transition text-medium-24 hover:text-green active:translate-y-1 active:text-green-button-pressed">
                    <a className="p-5" href="/" target="_blank">
                      Whatsapp
                    </a>
                  </li>
                  <li className="transition text-medium-24 hover:text-green active:translate-y-1 active:text-green-button-pressed">
                    <a className="p-5" href="/" target="_blank">
                      Dribbble
                    </a>
                  </li>
                  <li className="transition text-medium-24 hover:text-green active:translate-y-1 active:text-green-button-pressed">
                    <a className="p-5" href="/" target="_blank">
                      Behance
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[#999999] text-medium-16">
                @onside 2022 все права защищены
              </p>
              <p className="text-[#999999] text-medium-16">{'//'}</p>
              <p className="text-[#999999] text-medium-16">
                Политика конфиденциальности
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
