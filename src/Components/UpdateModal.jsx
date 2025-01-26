import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const UpdateModal = ({ setModal, docId, setDocId }) => {
  const [singeleData, setSingeleData] = useState({});

  //   console.log(singeleData, "--------");
  useEffect(() => {
    axios
      .get(`https://crowdcube-rose.vercel.app/campaign/${docId}`)
      .then((res) => {
        setSingeleData(res.data);
      })
      .catch((err) => {
        // console.log(err)
      });
  }, [docId]);
  const closeModal = () => {
    setModal(false);
  };
  //   modal func

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    // console.log("Form Data:-----", data);
    const id = singeleData?._id;
    axios
      .patch(`https://crowdcube-rose.vercel.app/campaign/updateone/${id}`, data)
      .then((res) => {
        if (res.data?.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Data update success",
            showConfirmButton: false,
            timer: 1500,
          });
          setModal(false);
        }
      })
      .catch((err) => {
        // console.log(err)
      });
  };
  return (
    <div className="modal modal-open ">
      <div className="modal-box relative">
        <h3 className="font-bold text-lg">Submit Your Updated Details</h3>
        <form onSubmit={handleSubmit}>
          {/* name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              readOnly
              value={singeleData?.userName}
              className="input input-bordered"
            />
          </div>
          {/* email */}
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              readOnly
              value={singeleData?.userEmail}
              className="input input-bordered"
            />
          </div>
          {/* photo url */}
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="image"
              defaultValue={singeleData?.image}
              className="input input-bordered"
            />
          </div>
          {/* title */}
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              name="title"
              defaultValue={singeleData?.title}
              className="input input-bordered"
            />
          </div>
          {/* minDonation */}
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Donation</span>
            </label>
            <input
              type="number"
              name="minDonation"
              defaultValue={singeleData?.minDonation}
              className="input input-bordered"
            />
          </div>
          {/* type */}
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <input
              type="text"
              name="type"
              defaultValue={singeleData?.type}
              className="input input-bordered"
            />
          </div>
          {/* deadline */}
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Deadline</span>
            </label>
            <input
              type="date"
              name="date"
              defaultValue={singeleData?.deadline}
              className="input input-bordered"
            />
          </div>
          {/* description */}
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              name="description"
              defaultValue={singeleData?.description}
              className="input input-bordered"
            />
          </div>
          {/* button */}
          <div className="modal-action">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-error absolute top-0 right-0 rounded-full text-lg font-semibold text-white"
              onClick={closeModal}
            >
              X
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;
