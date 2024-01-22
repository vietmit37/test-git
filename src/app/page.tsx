'use client';

import React, { useEffect, useState } from 'react';
import CardCourses, { CardCoursesListFallback } from '@/components/cards/card-courses';
import useResetTheme from '@/hooks/useResetTheme';
import Dropdown from '@/components/dropdown';

const country = ['TP Hồ Chí Minh', 'Tây Ninh', 'Cà Mau', 'BR-Vũng Tàu', 'Kiên Giang', 'Phan Thiết'];

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  useResetTheme();
  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <div className="py-12 container space-y-5">

      <div className="grid sm:grid-cols-2 sm:gap-y-2 md:grid-cols-4 gap-x-4">
        <Dropdown titleSeclectDefault="TP Hồ Chí Minh" dataOptions={country} subTitle="Địa chỉ" />
        <Dropdown titleSeclectDefault="Địa chỉ" dataOptions={country} subTitle="Địa chỉ" />
        <Dropdown titleSeclectDefault="Địa chỉ" dataOptions={country} subTitle="Địa chỉ" />
        <Dropdown titleSeclectDefault="Địa chỉ" dataOptions={country} subTitle="Địa chỉ" />
      </div>

      {isLoading ? <CardCoursesListFallback />
        : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 sm:gap-4 gap-4">
            <CardCourses
              urlImg="https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg"
              description=" Nunc convallis sagittis dui eu dictum. Cras sodales id ipsum
                    ac aliquam. Phasellus justo quam tung sssssssssssssssssssssssss."
              title="Title"
              nameCoach="Nguyen Van A"
              urlCoach="https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg"
            />
            <CardCourses
              urlImg="https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg"
              description=" Nunc convallis sagittis dui eu dictum. Cras sodales id ipsum
                    ac aliquam. Phasellus justo quam tung sssssssssssssssssssssssss."
              title="Title"
              nameCoach="Nguyen Van A"
              urlCoach="https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg"
            />
          </div>
        )}
      {/* <Suspense fallback={isLoading && <CardCoursesListFallback />}> */}
      {/*  <CardCourses */}
      {/*    urlImg="https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg" */}
      {/*    description="   Nunc convallis sagittis dui eu dictum. Cras sodales id ipsum */}
      {/*            ac aliquam. Phasellus justo quam tung sssssssssssssssssssssssss." */}
      {/*    title="Title" */}
      {/*    nameCoach="Nguyen Van A" */}
      {/*    urlCoach="https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg" */}
      {/*  /> */}
      {/* </Suspense> */}
    </div>
  );
}

export default HomePage;
