import dhruv from '../../public/assets/dhruv.jpg'
import sid from '../../public/assets/Sid.jpg'
import arnav from '../../public/assets/arnav.jpeg'
import patil from '../../public/assets/patil.jpeg'

const Team = () => {
    return (
      <section className="bg-gray-100 dark:bg-gray-900 py-16" id='team-section'>
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            Team Capybara
          </h1>

  
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-5">
            {/* Add your child elements here */}
            <div className="flex flex-col items-center p-8 rounded-xl">
              <img
                className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                src={patil}
                alt="Pranav Patil"
              />
  
              <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                Pranav Patil
              </h1>
  
              <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Team Leader & ML</p>
  
              <div className="flex mt-3 -mx-2 pt-3">
                <a
                  href="https://github.com/pranav7227"
                  className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="Github"
                  target="_blank"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/pranav-patil-095465225/"
                  className="mx-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="LinkedIn"
                  target="_blank"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.797-1.75-1.732 0-.935.784-1.732 1.75-1.732s1.75.797 1.75 1.732c0 .935-.784 1.732-1.75 1.732zm12.5 11.268h-3v-5.401c0-1.285-.025-2.939-1.792-2.939-1.794 0-2.068 1.4-2.068 2.849v5.491h-3v-10h2.875v1.367h.041c.401-.759 1.381-1.558 2.841-1.558 3.038 0 3.6 2 3.6 4.595v5.596z"></path>
                  </svg>
                </a>
              </div>
            </div>
            {/* 2 */}
            <div className="flex flex-col items-center p-8 rounded-xl">
              <img
                className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                src={sid}
                alt="Siddharth Singhal"
              />
  
              <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                Siddharth Singhal
              </h1>
  
              <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">IoT & App</p>
  
              <div className="flex mt-3 -mx-2 pt-3">
                <a
                  href="https://github.com/joytechs247"
                  className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="Github"
                  target="_blank"
                  
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/siddharth-singhal-242a10244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  className="mx-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="LinkedIn"
                  target="_blank"
                  
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.797-1.75-1.732 0-.935.784-1.732 1.75-1.732s1.75.797 1.75 1.732c0 .935-.784 1.732-1.75 1.732zm12.5 11.268h-3v-5.401c0-1.285-.025-2.939-1.792-2.939-1.794 0-2.068 1.4-2.068 2.849v5.491h-3v-10h2.875v1.367h.041c.401-.759 1.381-1.558 2.841-1.558 3.038 0 3.6 2 3.6 4.595v5.596z"></path>
                  </svg>
                </a>
              </div>
            </div>
            {/* 3 */}
            <div className="flex flex-col items-center p-8 rounded-xl">
              <img
                className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                src={dhruv}
                alt="Dhruv Gupta"
              />
  
              <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                Dhruv Gupta
              </h1>
  
              <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Frontend</p>
  
              <div className="flex mt-3 -mx-2 pt-3">
                <a
                  href="https://github.com/Dhruv-413"
                  className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="Github"
                  target="_blank"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/dhruvgpta/"
                  className="mx-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="LinkedIn"
                  target="_blank"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.797-1.75-1.732 0-.935.784-1.732 1.75-1.732s1.75.797 1.75 1.732c0 .935-.784 1.732-1.75 1.732zm12.5 11.268h-3v-5.401c0-1.285-.025-2.939-1.792-2.939-1.794 0-2.068 1.4-2.068 2.849v5.491h-3v-10h2.875v1.367h.041c.401-.759 1.381-1.558 2.841-1.558 3.038 0 3.6 2 3.6 4.595v5.596z"></path>
                  </svg>
                </a>
              </div>
            </div>
            {/* 4 */}
            <div className="flex flex-col items-center p-8 rounded-xl">
              <img
                className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                src={arnav}
                alt="Arnav Kawatra"
              />
  
              <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                Arnav Kawatra
              </h1>
  
              <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Frontend & Backend</p>
  
              <div className="flex mt-3 -mx-2 pt-3">
                <a
                  href="https://github.com/VoiD254/"
                  className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="Github"
                  target="_blank"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/arnav-kawatra-54b9551a6/"
                  className="mx-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="LinkedIn"
                  target="_blank"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.797-1.75-1.732 0-.935.784-1.732 1.75-1.732s1.75.797 1.75 1.732c0 .935-.784 1.732-1.75 1.732zm12.5 11.268h-3v-5.401c0-1.285-.025-2.939-1.792-2.939-1.794 0-2.068 1.4-2.068 2.849v5.491h-3v-10h2.875v1.367h.041c.401-.759 1.381-1.558 2.841-1.558 3.038 0 3.6 2 3.6 4.595v5.596z"></path>
                  </svg>
                </a>
              </div>
            </div>
            {/* 5 */}
            <div className="flex flex-col items-center p-8 rounded-xl">
              <img
                className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt="Sanidhya Singh"
              />
  
              <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
              Sanidhya Singh
              </h1>
  
              <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Research</p>
  
              <div className="flex mt-3 -mx-2 pt-3">
                <a
                  href="https://github.com/Zephyrusgodofwind"
                  className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="Github"
                  target="_blank"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/sanidhya-singh-a69b70268/"
                  className="mx-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="LinkedIn"
                  target="_blank"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.797-1.75-1.732 0-.935.784-1.732 1.75-1.732s1.75.797 1.75 1.732c0 .935-.784 1.732-1.75 1.732zm12.5 11.268h-3v-5.401c0-1.285-.025-2.939-1.792-2.939-1.794 0-2.068 1.4-2.068 2.849v5.491h-3v-10h2.875v1.367h.041c.401-.759 1.381-1.558 2.841-1.558 3.038 0 3.6 2 3.6 4.595v5.596z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Team;