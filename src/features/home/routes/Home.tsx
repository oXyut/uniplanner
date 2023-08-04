import { Button } from '@/components/Elements/Button'
import { Head } from '@/components/Head'
export const Home = () => {
  return (
    <>
      <Head title="Home" description="Home" />
      <div className="text-center w-full h-screen flex flex-col items-center justify-center gap-4">
        <p className='text-light font-bold'>時間割ベースの日程調整アプリ</p>
        <p className="text-light text-9xl mb-3">UniPlanner</p>
        <Button
          variant='primary'
          onClick={() => {console.log('clicked')}}
        >
          新しいイベントを作成
        </Button>
      </div>
    </>
  )
}
