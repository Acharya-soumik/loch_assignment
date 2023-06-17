const Card = () => {
  return (
    <div className="shadow-inner rounded p-4 bg-shade w-full min-h-full">
      <div className="flex justify-between mb-2">
        <svg
          width="24"
          height="26"
          viewBox="0 0 24 26"
          stroke="#000"
          strokeWidth="0.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.7245 18.9925C23.0308 17.7975 21.9995 14.4163 21.9995 10C21.9995 7.34784 20.946 4.8043 19.0706 2.92893C17.1952 1.05357 14.6517 0 11.9995 0C9.34736 0 6.80382 1.05357 4.92846 2.92893C3.0531 4.8043 1.99953 7.34784 1.99953 10C1.99953 14.4175 0.967028 17.7975 0.273278 18.9925C0.0961159 19.2963 0.00219568 19.6415 0.000988351 19.9931C-0.000218979 20.3448 0.0913295 20.6906 0.266401 20.9956C0.441473 21.3006 0.693877 21.5541 0.998159 21.7304C1.30244 21.9068 1.64784 21.9997 1.99953 22H7.10078C7.33149 23.1289 7.94506 24.1436 8.83769 24.8722C9.73033 25.6009 10.8472 25.9989 11.9995 25.9989C13.1518 25.9989 14.2687 25.6009 15.1614 24.8722C16.054 24.1436 16.6676 23.1289 16.8983 22H21.9995C22.3511 21.9995 22.6964 21.9064 23.0005 21.73C23.3046 21.5535 23.5568 21.3 23.7317 20.9951C23.9066 20.6901 23.9981 20.3444 23.9968 19.9928C23.9956 19.6412 23.9016 19.2962 23.7245 18.9925ZM11.9995 24C11.3793 23.9998 10.7744 23.8074 10.268 23.4492C9.76167 23.0911 9.37877 22.5848 9.17203 22H14.827C14.6203 22.5848 14.2374 23.0911 13.731 23.4492C13.2247 23.8074 12.6198 23.9998 11.9995 24ZM1.99953 20C2.96203 18.345 3.99953 14.51 3.99953 10C3.99953 7.87827 4.84238 5.84344 6.34267 4.34315C7.84296 2.84285 9.8778 2 11.9995 2C14.1213 2 16.1561 2.84285 17.6564 4.34315C19.1567 5.84344 19.9995 7.87827 19.9995 10C19.9995 14.5063 21.0345 18.3412 21.9995 20H1.99953Z"
            fill="black"
          />
        </svg>
        <p className="text-black hover:shadow px-4 py-2 rounded">Save</p>
      </div>
      <p className="text-black w-[80%]">
        We’ll be sending notifications to you here
      </p>
      <br />
      <input
        className="border p-2 rounded text-sm shadow-md w-full"
        placeholder="name@mail.com"
      />
    </div>
  );
};

export default Card;