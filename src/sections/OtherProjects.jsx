import React from "react";

export default function OtherProjects(props) {

  let onClickFunction = (link) => {
    return () => {
      window.location.href = `#${link}`
    }
  }


  return (
    <div>
        {props.projectTeasers.map((teaserInfo, index) => {
          return (
            <div className="other-proj-anim" style={{width: "100%", backgroundColor: index % 2 === 0 ? "white" : "black", color: index % 2 === 0 ? "black" : "white", display: "flex", alignItems: "center", }} onClick={onClickFunction(teaserInfo.routinglink)}>
              <div>
                <h3 className="sub-header-font mb-0">{teaserInfo.name}</h3>
                  {teaserInfo.tags.map((tag) => 
                    <span style={{padding: ".1rem .3rem", marginRight: ".3rem", marginBottom: ".5rem", fontSize: "8pt", backgroundColor: index % 2 === 0 ? "black" : "white", color: index % 2 === 0 ? "white" : "black", borderRadius: "4pt"}} >
                      {tag}
                    </span>
                  )}
              </div>
            </div>
          )
        })}
    </div>
  );
}
