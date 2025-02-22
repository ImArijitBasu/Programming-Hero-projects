import React from 'react';

const serviceDetailsPage = ({params}) => {
    const id = params.id;
    const data = 
    [
      {
        _id: "1",
        service_name: "Website Development",
        service_image: "https://example.com/images/website-development.jpg",
        service_description:
          "Professional website design and development services tailored to your business needs.",
      },
      {
        _id: "2",
        service_name: "Digital Marketing",
        service_image: "https://example.com/images/digital-marketing.jpg",
        service_description:
          "Comprehensive digital marketing solutions to enhance your online presence and drive traffic.",
      },
      {
        _id: "3",
        service_name: "Graphic Design",
        service_image: "https://example.com/images/graphic-design.jpg",
        service_description:
          "Creative graphic design services, including logos, banners, and social media graphics.",
      },
      {
        _id: "4",
        service_name: "SEO Optimization",
        service_image: "https://example.com/images/seo-optimization.jpg",
        service_description:
          "Boost your search engine rankings with expert SEO optimization techniques.",
      },
      {
        _id: "5",
        service_name: "Mobile App Development",
        service_image: "https://example.com/images/mobile-app-development.jpg",
        service_description:
          "Custom mobile app development services for Android and iOS platforms.",
      },
    ]
    const singleData = data.find(d => d._id == id)
    return (
        <div>
            <h1>Service Details</h1>
            <p>ID: {id}</p>
            <p>{singleData.service_name}</p>
            <p>{singleData.service_description}</p>
        </div>
    );
};

export default serviceDetailsPage;