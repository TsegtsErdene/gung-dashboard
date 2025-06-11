import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js Blank Page | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Blank Page TailAdmin Dashboard Template",
};

export default function Dashboard1Page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Dashboard 1" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <iframe
          title="Sanhuugiin tailan test"
          src="https://app.powerbi.com/view?r=eyJrIjoiNmY0MGNiNTMtODE3My00ZDg1LWFjZmItZThkZTQxMjljMjIwIiwidCI6Ijg5MGI5YTM0LWI4NDEtNDk2YS04MTkxLTU1YTQ0OGU2NDk0OSIsImMiOjEwfQ%3D%3D"
          frameBorder="0"
          allowFullScreen={true}
                 style={{
          width: "100%",
          height: "1060px",
        }}
        ></iframe>
      </div>
    </div>
  );
}
