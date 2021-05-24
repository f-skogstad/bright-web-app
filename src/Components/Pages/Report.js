import React from 'react';
import Form from 'Components/UI/Form';
import PrimaryBtn from 'Components/UI/PrimaryBtn';

function Report() {
  return (
    <div className='form-container'>
      <Form>
        <h1>Repair</h1>
        <p>Small explantation detaling what this is for</p>
        <div>
          <label htmlFor='name'></label>
          <input type='text' placeholder='Your name' id='name' />
        </div>
        <div>
          <label htmlFor='product'></label>
          <select id='product'>
            <option value=''>Product 1</option>
            <option value=''>Product 1</option>
            <option value=''>Product 1</option>
          </select>
        </div>
        <div className='cb-container'>
          <label htmlFor='part'></label>
          <input type='checkbox' id='part1' value='part1' />
          <label htmlFor='part1'>Part 1</label> <br />
          <input type='checkbox' id='part2' value='part2' />
          <label htmlFor='part2'>Part 2</label> <br />
          <input type='checkbox' id='part3' value='part3' />
          <label htmlFor='part3'>Part 3</label> <br />
        </div>
        <div>
          <label htmlFor='notes'></label>
          <textarea type='textarea' id='notes' placeholder='Notes' />
        </div>
        <PrimaryBtn>Send</PrimaryBtn>
      </Form>
    </div>
  );
}

export default Report;