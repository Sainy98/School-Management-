import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function AddSchool() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, key === 'image' ? value[0] : value);
      });

      await axios.post('/api/addSchool', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        timeout: 80000 
      });

      alert('School added successfully!');
      reset();
    } catch (error) {
      console.error('Error adding school:', error);
      alert('Failed to add school!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <h2>Add School</h2>

      <input type="text" {...register('name', { required: true })} placeholder="School Name" />
      {errors.name && <span>Name is required</span>}

      <input type="text" {...register('address', { required: true })} placeholder="Address" />
      {errors.address && <span>Address is required</span>}

      <input type="text" {...register('city', { required: true })} placeholder="City" />
      {errors.city && <span>City is required</span>}

      <input type="text" {...register('state', { required: true })} placeholder="State" />
      {errors.state && <span>State is required</span>}

      <input type="number" {...register('contact', { required: true })} placeholder="Contact" />
      {errors.contact && <span>Contact is required</span>}

      <input type="email" {...register('email_id', { required: true })} placeholder="Email" />
      {errors.email_id && <span>Email is required</span>}

      <input type="file" {...register('image', { required: true })} />
      {errors.image && <span>Image is required</span>}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Adding...' : 'Add School'}
      </button>
    </form>
  );
}
