"use client";

import { Building2, Users, Receipt } from 'lucide-react';
import { Doughnut, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from 'chart.js';

// Register the necessary components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

export default function Home() {
  const roomData = {
    labels: ['ห้องว่าง', 'ห้องที่มีผู้เช่า'],
    datasets: [{
      data: [8, 42],
      backgroundColor: ['#10b981', '#6366f1'],
      borderWidth: 0,
    }],
  };

  const paymentData = {
    labels: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.'],
    datasets: [{
      label: 'รายได้ (บาท)',
      data: [150000, 160000, 155000, 165000, 170000, 168000],
      backgroundColor: '#8b5cf6',
    }],
  };

  const paymentOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'รายได้รายเดือน',
      },
    },
  };

  return (
    <div>
      {/* Main Content */}
      <div className=" w-full h-full justify-end items-end px-4 sm:px-6 lg:px-8 py-8">
        <div>
          <p className="text-gray-600">ยินดีต้อนรับกลับสู่ระบบจัดการห้องพัก</p>
        </div>
        {/* Search Bar */}
          {/* <div className="relative mb-8"> 
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="ค้นหาห้องพัก หรือผู้เช่า..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white shadow-sm"
            />
          </div> */}

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Room Status Card */}
          <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-emerald-800">สถานะห้องพัก</h3>
              <Building2 className="h-6 w-6 text-emerald-600" />
            </div>
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 mb-4">
                <Doughnut data={roomData} />
              </div>
              <div className="w-full space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-emerald-700">ห้องทั้งหมด</span>
                  <span className="font-semibold text-emerald-900">50 ห้อง</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-700">ห้องว่าง</span>
                  <span className="font-semibold text-emerald-900">8 ห้อง</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-700">ห้องที่มีผู้เช่า</span>
                  <span className="font-semibold text-emerald-900">42 ห้อง</span>
                </div>
              </div>
            </div>
          </div>
          {/* Tenant Overview Card */}
          <div className="bg-gradient-to-br from-blue-300 to-blue-400 rounded-xl shadow-lg p-6 text-gray">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">ข้อมูลผู้เช่า</h3>
              <Users className="h-6 w-6" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-orange-100">ผู้เช่าทั้งหมด</span>
                <span className="font-semibold">45 คน</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-orange-100">สัญญาที่จะหมดอายุ</span>
                <span className="font-semibold">3 สัญญา</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-orange-100">ผู้เช่าใหม่เดือนนี้</span>
                <span className="font-semibold">2 คน</span>
              </div>
            </div>
          </div>

          {/* Payment Status Card */}
          <div className="bg-gradient-to-br from-gray-400 to-gray-500 rounded-xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">สถานะการชำระเงิน</h3>
              <Receipt className="h-6 w-6" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-violet-100">ชำระแล้ว</span>
                <span className="font-semibold">38 ห้อง</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-violet-100">รอชำระ</span>
                <span className="font-semibold">4 ห้อง</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-violet-100">เลยกำหนด</span>
                <span className="font-semibold">0 ห้อง</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
          <Bar options={paymentOptions} data={paymentData} height={80} />
        </div>
      </div>
    </div>
  );
}