
const Gallery = () => {
    return (
      <>
        <div>
          <h2 className="text-5xl mt-5 mb-5 font-bold text-center">Gallery</h2>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-2">
          <div
            className="card card-compact w-96 bg-base-100 shadow-xl"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            <figure>
              <img
                className="h-fit w-full object-cover"
                src="https://images.unsplash.com/photo-1511067007398-7e4b90cfa4bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="Shoes"
              />
            </figure>
            <h2 className="card-title mx-auto my-3">TT Court</h2>
          </div>
          <div
            className="card card-compact w-96 bg-base-100 shadow-xl"
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            <figure>
              <img
                className="h-fit w-full object-cover"
                src="https://images.unsplash.com/photo-1473040713884-6be5953eba5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
                alt="Shoes"
              />
            </figure>
            <h2 className="card-title mx-auto my-3">Ping Pong</h2>
          </div>
          <div
            className="card card-compact w-96 bg-base-100 shadow-xl"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            <figure>
              <img
                className="h-fit w-full object-cover"
                src="https://images.unsplash.com/photo-1590179395153-36eafc24d02a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
                alt="Shoes"
              />
            </figure>
            <h2 className="card-title mx-auto my-3">Soccer</h2>
          </div>
          <div
            className="card card-compact w-96 bg-base-100 shadow-xl"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            <figure>
              <img
                className="h-fit w-full object-cover"
                src="https://images.unsplash.com/photo-1593766788306-28561086694e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3JpY2tldCUyMHNwb3J0cyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt="Shoes"
              />
            </figure>
            <h2 className="card-title mx-auto my-3">Cricket</h2>
          </div>
          <div
            className="card card-compact w-96 bg-base-100 shadow-xl"
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            <figure>
              <img
                className="h-fit w-full object-cover"
                src="https://plus.unsplash.com/premium_photo-1671634085198-bbfd1c2a0fef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFza2V0YmFsbCUyMHNwb3J0cyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt="Shoes"
              />
            </figure>
            <h2 className="card-title mx-auto my-3">Basketball</h2>
          </div>
          <div
            className="card card-compact w-96 bg-base-100 shadow-xl"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            <figure>
              <img
                className="h-fit w-full object-cover"
                src="https://images.unsplash.com/photo-1485400031595-976c74cf4e25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
                alt="Shoes"
              />
            </figure>
            <h2 className="card-title mx-auto my-3">Rugby</h2>
          </div>
        </div>
      </>
    );
};

export default Gallery;