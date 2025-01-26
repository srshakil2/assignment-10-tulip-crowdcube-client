import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import UpdateModal from "./UpdateModal";
import axios from "axios";

const MyCampaign = () => {
  const [docId, setDocId] = useState("");
  const [modal, setModal] = useState(false);
  const { user } = useContext(AuthContext); // Get authenticated user
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    // Fetch campaigns for the authenticated user
    if (user?.email) {
      axios
        .get(
          `https://crowdcube-rose.vercel.app/campaign/useradd/${user?.email}`
        )

        .then((res) => setCampaigns(res?.data))
        .catch((error) => console.error("Error fetching campaigns:", error));
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://crowdcube-rose.vercel.app/campaign/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your campaign has been deleted.",
                "success"
              );
              const remaining = campaigns.filter((c) => c._id !== id);
              setCampaigns(remaining);
            }
          });
      }
    });
  };

  // handelModal
  const handelModal = (id) => {
    setDocId(id);
    setModal(true);
    // console.log(id, "-------");
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        My Campaigns
      </h1>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-teal-500 text-white">
              <th className="p-3 border">Title</th>
              <th className="p-3 border">Type</th>
              <th className="p-3 border">Minimum Donation</th>
              <th className="p-3 border">Deadline</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center p-4 text-gray-500">
                  No campaigns found
                </td>
              </tr>
            ) : (
              campaigns.map((campaign) => (
                <tr key={campaign._id} className="text-center">
                  <td className="p-3 border">{campaign.title}</td>
                  <td className="p-3 border">{campaign.type}</td>
                  <td className="p-3 border">${campaign.minDonation}</td>
                  <td className="p-3 border">
                    {new Date(campaign.deadline).toLocaleDateString()}
                  </td>
                  {/* ei khane update er kaj korbo kal */}
                  <td className="p-3 border">
                    <button
                      className="btn bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 mr-2"
                      onClick={() => handelModal(campaign._id)}
                    >
                      Update
                    </button>

                    {/* delete btn */}
                    <button
                      className="btn bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                      onClick={() => handleDelete(campaign._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {/* modal */}
      <div>
        {modal && (
          <UpdateModal
            modal={modal}
            setModal={setModal}
            docId={docId}
            setDocId={setDocId}
          ></UpdateModal>
        )}
      </div>
    </div>
  );
};

export default MyCampaign;
