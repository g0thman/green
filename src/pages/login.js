import React from 'react'
import Link from 'next/link'


const login = () => {
    return (
        <div>
            <h1 className="text-5xl text-orange-600">login</h1>
            <h2> HELLO LOGIN</h2>

            
            <div className=" container mx-auto max-w-xs">
                <div className="cursor-pointer">
                    <Link href="/">
                        <svg width="186" height="41" viewBox="0 0 186 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.568 13.12C27.8587 11.8133 26.832 10.824 25.488 10.152C24.1813 9.44266 22.632 9.088 20.84 9.088C17.7413 9.088 15.2587 10.1147 13.392 12.168C11.5253 14.184 10.592 16.8907 10.592 20.288C10.592 23.9093 11.5627 26.7467 13.504 28.8C15.4827 30.816 18.1893 31.824 21.624 31.824C23.976 31.824 25.9547 31.2267 27.56 30.032C29.2027 28.8373 30.3973 27.12 31.144 24.88H18.992V17.824H39.824V26.728C39.1147 29.1173 37.9013 31.3387 36.184 33.392C34.504 35.4453 32.3573 37.1067 29.744 38.376C27.1307 39.6453 24.1813 40.28 20.896 40.28C17.0133 40.28 13.5413 39.44 10.48 37.76C7.456 36.0427 5.08533 33.672 3.368 30.648C1.688 27.624 0.848 24.1707 0.848 20.288C0.848 16.4053 1.688 12.952 3.368 9.928C5.08533 6.86667 7.456 4.496 10.48 2.816C13.504 1.09866 16.9573 0.239998 20.84 0.239998C25.544 0.239998 29.5013 1.37866 32.712 3.656C35.96 5.93333 38.1067 9.088 39.152 13.12H28.568ZM54.7043 13.96C55.8243 12.2427 57.2243 10.8987 58.9043 9.928C60.5843 8.92 62.4509 8.416 64.5043 8.416V18.552H61.8723C59.4829 18.552 57.6909 19.0747 56.4963 20.12C55.3016 21.128 54.7043 22.92 54.7043 25.496V40H45.1283V8.752H54.7043V13.96ZM133.045 23.872C133.045 24.768 132.989 25.7013 132.877 26.672H111.205C111.355 28.6133 111.971 30.1067 113.053 31.152C114.173 32.16 115.536 32.664 117.141 32.664C119.531 32.664 121.192 31.656 122.125 29.64H132.317C131.795 31.6933 130.843 33.5413 129.461 35.184C128.117 36.8267 126.419 38.1147 124.365 39.048C122.312 39.9813 120.016 40.448 117.477 40.448C114.416 40.448 111.691 39.7947 109.301 38.488C106.912 37.1813 105.045 35.3147 103.701 32.888C102.357 30.4613 101.685 27.624 101.685 24.376C101.685 21.128 102.339 18.2907 103.645 15.864C104.989 13.4373 106.856 11.5707 109.245 10.264C111.635 8.95733 114.379 8.304 117.477 8.304C120.501 8.304 123.189 8.93866 125.541 10.208C127.893 11.4773 129.723 13.288 131.029 15.64C132.373 17.992 133.045 20.736 133.045 23.872ZM123.245 21.352C123.245 19.7093 122.685 18.4027 121.565 17.432C120.445 16.4613 119.045 15.976 117.365 15.976C115.76 15.976 114.397 16.4427 113.277 17.376C112.195 18.3093 111.523 19.6347 111.261 21.352H123.245ZM157.137 8.416C160.796 8.416 163.708 9.61067 165.873 12C168.076 14.352 169.177 17.6 169.177 21.744V40H159.657V23.032C159.657 20.9413 159.116 19.3173 158.033 18.16C156.95 17.0027 155.494 16.424 153.665 16.424C151.836 16.424 150.38 17.0027 149.297 18.16C148.214 19.3173 147.673 20.9413 147.673 23.032V40H138.097V8.752H147.673V12.896C148.644 11.5147 149.95 10.432 151.593 9.648C153.236 8.82667 155.084 8.416 157.137 8.416Z" fill="#4A5568"/>
                            <path d="M98.5374 23.872C98.5374 24.768 98.4814 25.7013 98.3694 26.672H76.6974C76.8467 28.6133 77.4627 30.1067 78.5454 31.152C79.6654 32.16 81.028 32.664 82.6334 32.664C85.0227 32.664 86.684 31.656 87.6174 29.64H97.8094C97.2867 31.6933 96.3347 33.5413 94.9534 35.184C93.6094 36.8267 91.9107 38.1147 89.8574 39.048C87.804 39.9813 85.508 40.448 82.9694 40.448C79.908 40.448 77.1827 39.7947 74.7934 38.488C72.404 37.1813 70.5374 35.3147 69.1934 32.888C67.8494 30.4613 67.1774 27.624 67.1774 24.376C67.1774 21.128 67.8307 18.2907 69.1374 15.864C70.4814 13.4373 72.348 11.5707 74.7374 10.264C77.1267 8.95733 79.8707 8.304 82.9694 8.304C85.9934 8.304 88.6814 8.93866 91.0334 10.208C93.3854 11.4773 95.2147 13.288 96.5214 15.64C97.8654 17.992 98.5374 20.736 98.5374 23.872ZM88.7374 21.352C88.7374 19.7093 88.1774 18.4027 87.0574 17.432C85.9374 16.4613 84.5374 15.976 82.8574 15.976C81.252 15.976 79.8894 16.4427 78.7694 17.376C77.6867 18.3093 77.0147 19.6347 76.7534 21.352H88.7374ZM180.311 40.448C178.631 40.448 177.25 39.9627 176.167 38.992C175.122 37.984 174.599 36.752 174.599 35.296C174.599 33.8027 175.122 32.552 176.167 31.544C177.25 30.536 178.631 30.032 180.311 30.032C181.954 30.032 183.298 30.536 184.343 31.544C185.426 32.552 185.967 33.8027 185.967 35.296C185.967 36.752 185.426 37.984 184.343 38.992C183.298 39.9627 181.954 40.448 180.311 40.448Z" fill="#68D391"/>
                        </svg>
                    </Link>
                    
                </div>
                <button className="px-6 py-1 bg-gray-300 rounded">
                        Sign in with google
                </button>
            </div>
            
        </div>
    )
}


export default login
