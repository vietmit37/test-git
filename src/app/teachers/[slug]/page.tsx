'use client';

import CardTeacherDetail from '@/components/cards/card-teacher-detail';

function TeacherId() {
  return (
    <div className="container grid grid-cols-3 gap-7 py-10">
      <CardTeacherDetail />
      <div className="col-span-2">
        <div className="mb-4">
          <div className="text-blue-900 font-semibold text-2xl">Biography</div>
          <span className="text-gray-600 text-[18px] align-sub">
            I'm a General Assembly Product Management educator where I showed courses face to face to understudies in Manhattan.
            I'm on E-Learning.com now since I adored my
            involvement with GA and truly appreciate instructing
            others about things I've learned.
            I have counselled for different tech organizations and kept in mind that in NYC was additionally a Product Manager at Bonobos - a web-concentrated retail garments brand where I regulated web and versatile properties that created several million in yearly income through countless clients.
          </span>
        </div>
        <div>
          <div className="text-blue-900 font-semibold text-2xl">Expertise In Area</div>
          <span className="text-gray-600 text-[18px] align-sub">
            I'm a General Assembly Product Management educator where I showed courses face to face to understudies in Manhattan. I'm on E-Learning.com now since I adored my involvement with GA and truly appreciate instructing others about things I've learned.
            I have counselled for different tech organizations and kept in mind that in NYC was additionally a Product Manager at Bonobos - a web-concentrated retail garments brand where I regulated web and versatile properties that created several million in yearly income through countless clients.
          </span>
        </div>
      </div>
    </div>
  );
}
export default TeacherId;
