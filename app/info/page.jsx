import UserInfo from '@/components/UserInfo'
import clientPromise from '../../config/mongoDB';
import React from 'react'

const page = ({ alldata }) => {
  console.log(alldata);
  return (
    <div>
        <UserInfo />
    </div>
  )
}

export default page;

export async function getServerSideProps() {

  try {
    const client = await clientPromise;
    const db = client.db("facebook");

    const alldata = await db
    .collection('data')
    .find({})
    .sort({ _id: -1 })
    .toArray()

    console.log(alldata);
    return {
      props: { alldata: JSON.parse(JSON.stringify(alldata)) }

    }
  } catch (error) {
    console.log(error);
  }
}