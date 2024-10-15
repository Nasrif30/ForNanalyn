import LoveMessageForm from '@/components/LoveMessageForm';
import BlogAnswer from '@/components/BlogAnswer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-purple-800 mb-12">
          Nanalyn Love Messages
        </h1>
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="p-6 sm:p-10">
            <LoveMessageForm />
            <hr className="my-10 border-t border-purple-200" />
            <BlogAnswer />
          </div>
        </div>
      </div>
    </div>
  );
}