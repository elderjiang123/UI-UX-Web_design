import React from 'react'
import { Feature } from '../../components';
import './whathrc.css';

const Whathrc = () => {
  return (
  <div className="hrc__whathrc section__margin" id="whathrc">
      <div className="hrc__whathrc-feature">
        <Feature title="What is hrc" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."/>
      </div>
      <div className="hrc__whathrc-heading">
        <h1 className="gradient__text">The possible beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className="hrc__whathrc-container">
      <Feature title="Chabots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought"/>
      <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
      <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
      </div>
    </div>
  )
}

export default Whathrc
