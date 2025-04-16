import React, { useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { signinUrl, getProjectsUrl, addProjectUrl } from "../api/api";
import { getAuthToken, setAuthToken, removeAuthToken } from "../api/token";



interface Portfolio {
  id: number;
  title: string;
  description: string;
}


const DashboardLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [portfolioName, setPortfolioName] = useState<string>("");
  const [portfolioDescription, setPortfolioDescription] = useState<string>("");

  const handleModalToggle = () => setIsModalOpen(!isModalOpen);

  useEffect(() => {
    const signin = async () => {
      try {
        const response = await axios.post(signinUrl, {
          email: "sabidjanovv@gmail.com",
          password: "m12345678",
        });

        console.log("Signin response:", response.data);

        if (response.data?.access_token) {
          setAuthToken(response.data.access_token); // Save token using the helper
          console.log("Signin successful ✅");
        } else {
          console.warn("Token not found in response.");
        }
      } catch (error) {
        console.error("Signin failed ❌", error);
      }
    };

    signin();
  }, []);

  const queryClient = useQueryClient();

  // Fetch portfolio data (projects)
  const { data, isLoading } = useQuery<Portfolio[], Error>({
    queryKey: ["portfolios"],
    queryFn: async () => {
      const token = getAuthToken();
      if (!token) throw new Error("No auth token found");

      const response = await axios.get(getProjectsUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    },
  });

  const portfolios = data ?? [];

  // Create new portfolio (project)
  const { mutate: addPortfolio } = useMutation<void, Error, { title: string; description: string }>({
    mutationFn: async (portfolio) => {
      const token = getAuthToken();
      if (!token) throw new Error("No auth token found");

      const response = await axios.post(addProjectUrl, portfolio, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["portfolios"] });
      setPortfolioName("");
      setPortfolioDescription("");
      handleModalToggle();
    },
    onError: (error) => {
      console.error("Error adding portfolio:", error);
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addPortfolio({ title: portfolioName, description: portfolioDescription });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-gray-200 flex">
      {/* Sidebar and Header */}
      <aside className="w-64 bg-white bg-opacity-40 backdrop-blur-md shadow-lg border-r border-gray-300 hidden md:block">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-3xl font-extrabold text-indigo-600">🎨 Portfolio</h2>
        </div>
        <nav className="p-4 space-y-3">
          <a href="/portfolio" className="block px-4 py-2 rounded-lg hover:bg-indigo-100 text-gray-700 font-medium transition">📁 Portfolio</a>
          <a href="#" className="block px-4 py-2 rounded-lg hover:bg-indigo-100 text-gray-700 font-medium transition">👤 Profil</a>
          <a href="#" className="block px-4 py-2 rounded-lg hover:bg-indigo-100 text-gray-700 font-medium transition">⚙️ Sozlamalar</a>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="bg-white bg-opacity-50 backdrop-blur-md shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-20 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="🔍 Qidiruv..."
              className="px-3 py-2 rounded-md bg-gray-100 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img src="http://localhost:5173/src/assets/milliardev.jpg" alt="avatar" className="object-cover w-full h-full" />
            </div>
          </div>
        </header>

        <main className="p-6 space-y-10">
          {/* Dashboard Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-40 backdrop-blur-md rounded-2xl shadow-lg p-6 transition hover:shadow-xl">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Portfolio soni</h3>
              <p className="text-4xl font-extrabold text-indigo-600">{portfolios.length}</p>
            </div>
            <div className="bg-white bg-opacity-40 backdrop-blur-md rounded-2xl shadow-lg p-6 transition hover:shadow-xl">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Oxirgi qo‘shilgan</h3>
              <p className="text-gray-600">{portfolios[0]?.title || "Ma'lumot yo‘q"}</p>
            </div>
            <div className="bg-white bg-opacity-40 backdrop-blur-md rounded-2xl shadow-lg p-6 transition hover:shadow-xl">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Foydalanuvchi</h3>
              <p className="text-gray-600">sabidjanovv@gmail.com</p>
            </div>
          </div>

          {/* Portfolio List */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">📋 Portfolio ro‘yxati</h2>
            <div className="overflow-x-auto bg-white bg-opacity-40 backdrop-blur-md rounded-2xl shadow-md">
              <table className="min-w-full table-auto border-collapse">
                <thead className="bg-indigo-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Nomi</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Tavsif</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Harakat</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? (
                    <tr><td colSpan={3} className="text-center py-4">⏳ Yuklanmoqda...</td></tr>
                  ) : portfolios.length > 0 ? (
                    portfolios.map((item: Portfolio) => (
                      <tr key={item.id} className="border-t hover:bg-gray-50 transition">
                        <td className="px-6 py-4 text-gray-800">{item.title}</td>
                        <td className="px-6 py-4 text-gray-600">{item.description}</td>
                        <td className="px-6 py-4 space-x-2">
                          <button className="text-indigo-600 hover:text-indigo-800 font-medium transition">✏️ Tahrirlash</button>
                          <button className="text-red-500 hover:text-red-700 font-medium transition">🗑️ O‘chirish</button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr><td colSpan={3} className="text-center py-4">🚫 Portfolio topilmadi</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>

          {/* Add Portfolio Button */}
          <div className="mt-6 text-center">
            <button
              onClick={handleModalToggle}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition"
            >
              🖋️ Yangi Portfolio Qo‘shish
            </button>
          </div>
        </main>
      </div>

      {/* Modal for Adding Portfolio */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30">
          <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg w-96 p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Yangi Portfolio Qo‘shish</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="portfolioName" className="block text-gray-700">Portfolio Nomi</label>
                <input
                  type="text"
                  id="portfolioName"
                  value={portfolioName}
                  onChange={(e) => setPortfolioName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="portfolioDescription" className="block text-gray-700">Tavsif</label>
                <textarea
                  id="portfolioDescription"
                  value={portfolioDescription}
                  onChange={(e) => setPortfolioDescription(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={handleModalToggle}
                  className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
                >
                  Yopish
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                  Qo‘shish
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
