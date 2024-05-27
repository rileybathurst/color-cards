import * as React from "react"

interface ColorCardTypes {
  color: string;
  variables: string[];
}
function ColorCard({ color, variables }: ColorCardTypes) {

  return (
    <section
      className="color-deck"
    >
      {variables.map((variable) => (
        <div
          key={`${color}-${variable}`}
          className={`color-card ${color}-${variable}`} >
          {color} - {variable}
          <div
            className="color-card"
            style={{
              backgroundColor: `var(--${color}-${variable})`,
            }}
          >
            {/* stay gold */}
          </div>
        </div>
      ))}
    </section>
  );
}