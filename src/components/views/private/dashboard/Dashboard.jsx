import { Popconfirm } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useGetPlacesByUser } from "../../../../utils/hooks/useGetPlaces";
import { PATHSPROJECT } from "../../../../utils/constants/pathsProject";
import SkeletonPlaces from "../../../ui/loadings/skeleton_places/SkeletonPlaces";
import "./Dashboard.css";

export default function Admin() {
  const { create_place, domain } = PATHSPROJECT;
  let { places, user, loading, deletePlaceById, contextHolder } =
    useGetPlacesByUser();

  const { first_name } = user;

  console.log(user)

  return (
    <div className="dashboard">
      {contextHolder}
      <span className="dashboard-title">
        Welcome <span className="dashboard-nameUser">{first_name}</span>
      </span>
      <p className="dashboard-subtitlePlaces">Your Places</p>
      <article className="dashboard-contentAddPlace">
        <Link className="dashboard-buttonAddPlace" to={create_place}>
          <span>Create</span>
          <PlusOutlined />
        </Link>
      </article>
      <section className="dashboard-restaurants">
        {!loading ? (
          <>
            {places.length === 0 && <p>You don't have places</p>}
            {places.map((place, i) => (
              <article key={i} className="dashboard-restaurant">
                <h4>
                  {place.name ? place.name : "Nameless"} - {place.theme}
                </h4>
                <div className="dashboard-content">
                  <div className="dashboard-contentDesing">
                    {place.home.background_img ? (
                      <img src={place.home.background_img} alt="bg-place" />
                    ) : (
                      <div
                        style={{
                          width: "80px",
                          height: "150px",
                          borderRadius: "10px",
                          backgroundColor: place.home.background_color,
                        }}
                      ></div>
                    )}
                  </div>
                  <div className="dashboard-contentData">
                    <span className="dashboard-buttonsActions">
                      <Link
                        to={create_place + "/" + place._id}
                        className="dashboard-linkEdit"
                      >
                        <button className="dashboard-buttonEdit">Edit</button>
                      </Link>
                      <Popconfirm
                        title="Delete the place"
                        description="Are you sure to delete this place?"
                        onConfirm={() => deletePlaceById(place._id)}
                        okText="Yes"
                        cancelText="No"
                      >
                        <button
                          type="button"
                          className="dashboard-buttonDelete"
                        >
                          Delete
                        </button>
                      </Popconfirm>
                      <Link to={domain + "/" + place._id} className="linkEdit">
                        <button className="dashboard-buttonDomain">
                          Domain
                        </button>
                      </Link>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </>
        ) : (
          <SkeletonPlaces />
        )}
      </section>
    </div>
  );
}
