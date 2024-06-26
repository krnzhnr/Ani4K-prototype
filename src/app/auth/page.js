import styles from "@/src/app/auth/auth.module.css"

export default function Page() {
    return (
        <div className={`container-xs ${styles.authContainer}`}>
            <h1 className={styles.authHeader}>Авторизация</h1>
            <div className={styles.authItems}>
                <a
                    href="https://discord.com/channels/863482097896783893/863482098604965942"
                    className="auth-button"
                >
                    <button type="button"
                            className={`${styles.btn} btn btn-light ${styles.discordBtn} ${styles.socialBtn}`}>
                        <svg
                            width={20}
                            height={20}
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{marginRight: 12}}
                        >
                            <path
                                d="M85.22 24.958c-11.459-8.575-22.438-8.334-22.438-8.334l-1.122 1.282c13.623 4.087 19.954 10.097 19.954 10.097-19.491-10.731-44.317-10.654-64.59 0 0 0 6.571-6.331 20.996-10.418l-.801-.962s-10.899-.24-22.438 8.334c0 0-11.54 20.755-11.54 46.319 0 0 6.732 11.54 24.442 12.101 0 0 2.965-3.526 5.369-6.571-10.177-3.045-14.024-9.376-14.024-9.376 6.394 4.001 12.859 6.505 20.916 8.094 13.108 2.698 29.413-.076 41.591-8.094 0 0-4.007 6.491-14.505 9.456a625.034 625.034 0 0 0 5.289 6.411c17.71-.561 24.441-12.101 24.441-12.02-.001-25.564-11.54-46.319-11.54-46.319zM35.055 63.824c-4.488 0-8.174-3.927-8.174-8.815.328-11.707 16.102-11.671 16.348 0 0 4.888-3.607 8.815-8.174 8.815zm29.249 0c-4.488 0-8.174-3.927-8.174-8.815.36-11.684 15.937-11.689 16.348 0 0 4.888-3.606 8.815-8.174 8.815z"
                                id="Layer_2"
                                fill="#ffffff"
                                className="fill-6665d2"
                            />
                        </svg>
                        Продолжить с Discord
                    </button>
                </a>
                <a href="#" className="auth-button">
                    <button type="button" className={`${styles.btn} btn btn-light ${styles.socialBtn}`}>
                        <svg
                            width="20px"
                            height="20px"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            style={{marginRight: 12}}
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth={0}/>
                            <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    fill="#4285F4"
                                    d="M14.9 8.161c0-.476-.039-.954-.121-1.422h-6.64v2.695h3.802a3.24 3.24 0 01-1.407 2.127v1.75h2.269c1.332-1.22 2.097-3.02 2.097-5.15z"
                                ></path>
                                <path
                                    fill="#34A853"
                                    d="M8.14 15c1.898 0 3.499-.62 4.665-1.69l-2.268-1.749c-.631.427-1.446.669-2.395.669-1.836 0-3.393-1.232-3.952-2.888H1.85v1.803A7.044 7.044 0 008.14 15z"
                                ></path>
                                <path
                                    fill="#FBBC04"
                                    d="M4.187 9.342a4.17 4.17 0 010-2.68V4.859H1.849a6.97 6.97 0 000 6.286l2.338-1.803z"
                                ></path>
                                <path
                                    fill="#EA4335"
                                    d="M8.14 3.77a3.837 3.837 0 012.7 1.05l2.01-1.999a6.786 6.786 0 00-4.71-1.82 7.042 7.042 0 00-6.29 3.858L4.186 6.66c.556-1.658 2.116-2.89 3.952-2.89z"
                                ></path>
                            </g>
                        </svg>
                        Продолжить с Google
                    </button>
                </a>
                <a href="#" className="auth-button">
                    <button type="button" className={`${styles.btn} btn btn-light ${styles.socialBtn}`}>
                        <svg
                            height="20px"
                            width="20px"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{marginRight: 12}}
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 512 512"
                            xmlSpace="preserve"
                            fill="#000000"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth={0}/>
                            <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    style={{fill: "#436EAB"}}
                                    d="M440.649,295.361c16.984,16.582,34.909,32.182,50.142,50.436 c6.729,8.112,13.099,16.482,17.973,25.896c6.906,13.382,0.651,28.108-11.348,28.907l-74.59-0.034 c-19.238,1.596-34.585-6.148-47.489-19.302c-10.327-10.519-19.891-21.714-29.821-32.588c-4.071-4.444-8.332-8.626-13.422-11.932 c-10.182-6.609-19.021-4.586-24.84,6.034c-5.926,10.802-7.271,22.762-7.853,34.8c-0.799,17.564-6.108,22.182-23.751,22.986 c-37.705,1.778-73.489-3.926-106.732-22.947c-29.308-16.768-52.034-40.441-71.816-67.24 C58.589,258.194,29.094,200.852,2.586,141.904c-5.967-13.281-1.603-20.41,13.051-20.663c24.333-0.473,48.663-0.439,73.025-0.034 c9.89,0.145,16.437,5.817,20.256,15.16c13.165,32.371,29.274,63.169,49.494,91.716c5.385,7.6,10.876,15.201,18.694,20.55 c8.65,5.923,15.236,3.96,19.305-5.676c2.582-6.11,3.713-12.691,4.295-19.234c1.928-22.513,2.182-44.988-1.199-67.422 c-2.076-14.001-9.962-23.065-23.933-25.714c-7.129-1.351-6.068-4.004-2.616-8.073c5.995-7.018,11.634-11.387,22.875-11.387h84.298 c13.271,2.619,16.218,8.581,18.035,21.934l0.072,93.637c-0.145,5.169,2.582,20.51,11.893,23.931 c7.452,2.436,12.364-3.526,16.836-8.251c20.183-21.421,34.588-46.737,47.457-72.951c5.711-11.527,10.622-23.497,15.381-35.458 c3.526-8.875,9.059-13.242,19.056-13.049l81.132,0.072c2.406,0,4.84,0.035,7.17,0.434c13.671,2.33,17.418,8.211,13.195,21.561 c-6.653,20.945-19.598,38.4-32.255,55.935c-13.53,18.721-28.001,36.802-41.418,55.634 C424.357,271.756,425.336,280.424,440.649,295.361L440.649,295.361z"
                                ></path>
                            </g>
                        </svg>
                        Продолжить с VK
                    </button>
                </a>
                <a href="/auth/email" className="auth-button">
                    <button type="button" className={`${styles.btn} btn btn-light`}>
                        Продолжить с Email
                    </button>
                </a>
                <hr className={styles.authSeparator}/>
                <a href="/" className="home-button">
                    <button type="button" className={`${styles.btn} btn btn-outline-secondary`}>
                        На главную
                    </button>
                </a>
            </div>
        </div>

    )
}