'use client';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useRouter } from 'next/navigation';

const DeleteIcon = ({ dbtype, id }: { dbtype: string; id: string }) => {
  const router = useRouter();

  const onClick = async (data: any) => {
    try {
      await deleteData(dbtype, data);
      router.refresh();
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };
  return (
    <div>
      <RiDeleteBin5Line
        size={27}
        cursor="pointer"
        onClick={() => onClick(id)}
      />
    </div>
  );
};

export default DeleteIcon;

async function deleteData(dbtype: string, id: string) {
  let url = `/api/db/${dbtype}/${id}`;

  const requestBody = {
    id: id,
  };

  const res = await fetch(url, {
    method: 'DELETE',
    body: JSON.stringify(requestBody),

    cache: 'no-cache',
  });

  if (!res.ok) {
    throw new Error(`Failed to send data to ${dbtype}`);
  }

  return res.json();
}
