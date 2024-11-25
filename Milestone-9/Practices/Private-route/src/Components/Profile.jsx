import React, { useContext } from 'react';
import { AuthContext } from '../Firebase/AuthProvider';

const Profile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div >
            user profile - {user?.email}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sunt suscipit unde beatae libero! Quae, distinctio similique. Odit, aperiam. Maiores ipsa ullam placeat dolores corrupti dolore quas, ratione exercitationem minus nulla magnam rerum quam modi qui commodi nemo at nam expedita minima sunt cum nostrum. Quibusdam officiis iure dignissimos magnam minus aspernatur, facilis saepe quae totam consectetur quis ut quod labore nisi voluptatibus dolore repudiandae quos sit laborum, perferendis voluptatum aperiam nulla? Necessitatibus provident labore animi soluta vitae suscipit eos dignissimos rerum repellendus alias ut modi a ipsam, tempora veritatis similique iusto. Architecto, fugiat dicta, debitis atque quidem quis a dolores voluptates rem vero reprehenderit consectetur sed! Voluptas adipisci ea voluptatibus dolore expedita, officiis nisi sint nemo velit? Officiis, exercitationem deleniti hic unde accusantium dolor ad ipsam delectus provident, minus ullam repudiandae iste autem dicta ea reprehenderit impedit nemo possimus perferendis eligendi eaque corporis quae. Velit voluptates officiis sequi, quas porro quasi minus vitae laudantium inventore repellendus debitis excepturi unde at, officia harum ex quia. Nihil, sequi ullam. Eveniet fugit excepturi obcaecati. Quam iste nihil, obcaecati architecto cum eum alias harum blanditiis quas modi a esse voluptate numquam totam sed corrupti quidem perferendis, tempora saepe doloremque ducimus distinctio labore. Dolores?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id eum, vitae commodi odio soluta est rem blanditiis incidunt provident dolores aliquid inventore magni necessitatibus numquam nam. Repudiandae numquam deleniti sed harum, maxime pariatur qui odio expedita beatae, et consequatur nobis.</p>
        </div>
    );
};

export default Profile;