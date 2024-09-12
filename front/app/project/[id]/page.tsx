"use client";

import Header from "@/app/components/header/Header";
import AboutProject from "@/app/components/aboutProject/AboutProject";

import dynamic from "next/dynamic";
import {useEffect, useState} from "react";
import {getProject} from "@/app/utils/server/server";
import {ProjectInterface} from "@/app/project/[id]/ProjectInterface";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const Project = ({ params }: { params: { id: string } }) => {
    const [project, setProject] = useState<ProjectInterface>();

    useEffect(() => {
        getProject(params.id).then(data => {
            setProject(data);
            console.log(data)
        })
    }, []);

  return (
    <div>
      <AnimatedCursor
        color={"255, 255, 255"}
        outerSize={50}
        innerSize={8}
        innerStyle={{
          backgroundColor: "rgb(0, 0, 0)",
        }}
        outerScale={2}
        outerAlpha={1}
        outerStyle={{
          mixBlendMode: "difference",
        }}
      />
      <Header />
        {project && <AboutProject project={project}/>}
    </div>
  );
};

export default Project;
