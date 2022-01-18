import React from "react";
import profile from "../media/profile.png";

function About() {
  return (
    <div className="About">
      <fieldset>
        <legend>
          <img src={profile} />
        </legend>
        <div className="details">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            distinctio aliquid officiis tenetur dignissimos at veniam enim dolor
            odit omnis repellendus, repudiandae soluta nemo, facilis autem vitae
            voluptatum laborum amet.
          </p>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur officia nobis perferendis. Dolor debitis harum sapiente, iusto nulla, totam eum iste consequuntur reprehenderit maiores eligendi necessitatibus voluptatibus mollitia laboriosam quis.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem temporibus, amet aliquid praesentium sequi, sunt ipsam, voluptatum hic laudantium dignissimos possimus eos quia animi. Fugiat quaerat vel doloremque excepturi eligendi?</p>
        </div>
      </fieldset>
    </div>
  );
}

export default About;
