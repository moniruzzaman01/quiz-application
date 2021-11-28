import React from 'react'

export default function CheckBox({className, CheckBoxDetails}) {
    return (
        <React.Fragment>
            <label className={className} >
              <input type="checkbox" />
              <span> {CheckBoxDetails}</span>
            </label>
        </React.Fragment>
    )
}
