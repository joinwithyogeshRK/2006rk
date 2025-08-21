import React from 'react';
import This from '@/components/This';
import Update from '@/components/Update';

const Index = () => {
  return (
   <>
     <This />
     {/* Added Update component at the top of the page content */}
     <Update />
     
     <div className="container mx-auto px-4 py-8">
       <section className="mt-8">
         <h1 className="text-3xl font-bold text-primary-800 mb-6">Welcome to TaskMaster</h1>
         <p className="text-lg text-gray-700 mb-8">Your ultimate task management solution</p>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-surface rounded-lg p-6 shadow-neumorphic">
             <h2 className="text-xl font-semibold mb-4">Get Started</h2>
             <p className="mb-4">Begin organizing your tasks and boost your productivity today.</p>
             <button className="btn-primary">Create Your First Task</button>
           </div>
           
           <div className="bg-surface rounded-lg p-6 shadow-neumorphic">
             <h2 className="text-xl font-semibold mb-4">Explore Features</h2>
             <p className="mb-4">Discover all the powerful tools TaskMaster has to offer.</p>
             <button className="btn-secondary">View Features</button>
           </div>
         </div>
       </section>
       
       <section className="mt-16">
         <h2 className="text-2xl font-bold text-primary-800 mb-6">Why Choose TaskMaster?</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="task-card">
             <h3 className="text-lg font-medium mb-2">Intuitive Interface</h3>
             <p>Simple and clean design that makes task management a breeze.</p>
           </div>
           <div className="task-card">
             <h3 className="text-lg font-medium mb-2">Smart Categories</h3>
             <p>Organize your tasks with customizable categories and tags.</p>
           </div>
           <div className="task-card">
             <h3 className="text-lg font-medium mb-2">Detailed Analytics</h3>
             <p>Track your productivity with comprehensive reports and insights.</p>
           </div>
         </div>
       </section>
     </div>
   </>
  );
};

export default Index;