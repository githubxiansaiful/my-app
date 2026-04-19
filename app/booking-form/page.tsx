'use client';

import React, { useState } from 'react';
import { Plus, Trash2, MapPin, Calendar, Clock, Users } from 'lucide-react';

interface EmailField {
    id: number;
    email: string;
}

const BookingForm: React.FC = () => {
    const [bookingType, setBookingType] = useState<'individual' | 'organization'>('individual');
    const [direction, setDirection] = useState<'oneway' | 'twoway'>('oneway');
    const [emails, setEmails] = useState<EmailField[]>([{ id: 1, email: '' }]);

    const [formData, setFormData] = useState({
        dispatchId: '',
        tripDate: '',
        tripTime: '',
        homePhone: '',
        cellphone: '',
        accompanyingPhone: '',
        firstName: '',
        lastName: '',
        pickupAddress: '',
        pickupNote: '',
        dropoffAddress: '',
        dropoffNote: '',
        wheelchairCount: 1,
        ambulatoryCount: 0,
        wheelchairSize: 'M' as 'S' | 'M' | 'L',
        driverAssign: '',
        bookedBy: '',
        clientNotes: '',
        driverNotes: '',
        dispatcherNotes: '',
        paymentMethod: 'Unassigned' as 'Unassigned' | 'Cash' | 'Charge' | 'Prepaid' | 'Credit',
        displayPrice: '',
        invoicePrice: '',
        tip: '',
    });

    const addEmail = () => setEmails([...emails, { id: Date.now(), email: '' }]);

    const removeEmail = (id: number) => {
        if (emails.length === 1) return;
        setEmails(emails.filter(e => e.id !== id));
    };

    const updateEmail = (id: number, value: string) => {
        setEmails(emails.map(e => e.id === id ? { ...e, email: value } : e));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ bookingType, direction, emails, ...formData });
        alert('Booking submitted successfully!');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-6 py-3 shadow-sm">
                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                            <Users className="text-white" size={24} />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">GTA Accessible</h1>
                            <p className="text-blue-600 font-medium">Booking Form</p>
                        </div>
                    </div>
                    <p className="mt-4 text-gray-600 text-lg">Safe • Reliable • Wheelchair Accessible Transportation</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-10">

                    {/* ==================== STEP 1: Trip Information ==================== */}
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6 text-white">
                            <div className="flex items-center gap-3">
                                <div className="bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full">Step 1</div>
                                <h2 className="text-2xl font-semibold">Trip Information</h2>
                            </div>
                        </div>

                        <div className="p-8 space-y-10">
                            {/* Booking Type & Direction */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div>
                                    <label className="text-sm font-semibold text-gray-700 block mb-4">Booking Type</label>
                                    <div className="flex gap-4">
                                        <button
                                            type="button"
                                            onClick={() => setBookingType('individual')}
                                            className={`flex-1 py-4 rounded-2xl font-medium transition-all ${bookingType === 'individual'
                                                ? 'bg-blue-600 text-white shadow-md'
                                                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
                                        >
                                            Individual Book
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setBookingType('organization')}
                                            className={`flex-1 py-4 rounded-2xl font-medium transition-all ${bookingType === 'organization'
                                                ? 'bg-blue-600 text-white shadow-md'
                                                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
                                        >
                                            Organization Book
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm font-semibold text-gray-700 block mb-4">Direction</label>
                                    <div className="flex gap-4">
                                        <button
                                            type="button"
                                            onClick={() => setDirection('oneway')}
                                            className={`flex-1 py-4 rounded-2xl font-medium transition-all ${direction === 'oneway'
                                                ? 'bg-blue-600 text-white shadow-md'
                                                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
                                        >
                                            One Way
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setDirection('twoway')}
                                            className={`flex-1 py-4 rounded-2xl font-medium transition-all ${direction === 'twoway'
                                                ? 'bg-blue-600 text-white shadow-md'
                                                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
                                        >
                                            Two Way
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Basic Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Dispatch ID</label>
                                    <input
                                        type="text"
                                        name="dispatchId"
                                        value={formData.dispatchId}
                                        onChange={handleChange}
                                        className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 transition"
                                        placeholder="e.g. 137015"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                                            <Calendar size={18} /> Trip Date <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="date"
                                            name="tripDate"
                                            value={formData.tripDate}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                                            <Clock size={18} /> Trip Time <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="time"
                                            name="tripTime"
                                            value={formData.tripTime}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Contact & Passenger Info */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Home Phone <span className="text-red-500">*</span></label>
                                    <input type="tel" name="homePhone" value={formData.homePhone} onChange={handleChange} required className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Cellphone</label>
                                    <input type="tel" name="cellphone" value={formData.cellphone} onChange={handleChange} className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Accompanying Phone</label>
                                    <input type="tel" name="accompanyingPhone" value={formData.accompanyingPhone} onChange={handleChange} className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Passenger First Name <span className="text-red-500">*</span></label>
                                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Passenger Last Name</label>
                                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500" />
                                </div>
                            </div>

                            {/* Multiple Emails */}
                            <div>
                                <div className="flex justify-between items-center mb-3">
                                    <label className="text-sm font-medium text-gray-700">Email Address(es) <span className="text-red-500">*</span></label>
                                    <button type="button" onClick={addEmail} className="text-blue-600 hover:text-blue-700 flex items-center gap-1.5 text-sm font-medium">
                                        <Plus size={18} /> Add another email
                                    </button>
                                </div>
                                {emails.map((field) => (
                                    <div key={field.id} className="flex gap-3 mb-4">
                                        <input
                                            type="email"
                                            value={field.email}
                                            onChange={(e) => updateEmail(field.id, e.target.value)}
                                            placeholder="client@example.com"
                                            required
                                            className="flex-1 px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500"
                                        />
                                        {emails.length > 1 && (
                                            <button type="button" onClick={() => removeEmail(field.id)} className="text-red-500 hover:bg-red-50 p-4 rounded-2xl">
                                                <Trash2 size={22} />
                                            </button>
                                        )}
                                    </div>
                                ))}
                                <p className="text-xs text-gray-500">All added emails will receive trip confirmation.</p>
                            </div>

                            {/* Addresses */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Address</label>
                                    <textarea name="pickupAddress" value={formData.pickupAddress} onChange={handleChange} rows={3} className="w-full px-5 py-4 border border-gray-200 rounded-3xl focus:outline-none focus:border-blue-500 resize-y" placeholder="Full address with unit if any" />
                                    <input name="pickupNote" value={formData.pickupNote} onChange={handleChange} placeholder="Note / Landmark (Optional)" className="mt-3 w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Dropoff Address</label>
                                    <textarea name="dropoffAddress" value={formData.dropoffAddress} onChange={handleChange} rows={3} className="w-full px-5 py-4 border border-gray-200 rounded-3xl focus:outline-none focus:border-blue-500 resize-y" />
                                    <input name="dropoffNote" value={formData.dropoffNote} onChange={handleChange} placeholder="Note / Landmark (Optional)" className="mt-3 w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500" />
                                </div>
                            </div>

                            {/* Google Maps Area */}
                            <div className="bg-slate-50 border border-dashed border-slate-300 rounded-3xl h-80 flex flex-col items-center justify-center text-center">
                                <MapPin className="text-blue-500 mb-4" size={64} />
                                <p className="text-xl font-medium text-gray-700">Google Maps Preview</p>
                                <p className="text-gray-500 mt-2">Distance and estimated KM will appear here automatically</p>
                            </div>
                        </div>
                    </div>

                    {/* ==================== Passenger & Vehicle Requirements ==================== */}
                    <div className="bg-white rounded-3xl shadow-xl p-8">
                        <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                            <Users className="text-blue-600" /> Passenger & Vehicle Requirements
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-2 block">Wheelchair Passengers</label>
                                <select name="wheelchairCount" value={formData.wheelchairCount} onChange={handleChange} className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 text-lg">
                                    {[...Array(12)].map((_, i) => (
                                        <option key={i} value={i + 1}>{i + 1}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-2 block">Ambulatory Passengers</label>
                                <select name="ambulatoryCount" value={formData.ambulatoryCount} onChange={handleChange} className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 text-lg">
                                    {[...Array(13)].map((_, i) => (
                                        <option key={i} value={i}>{i}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-3 block">Wheelchair Size</label>
                                <div className="flex gap-3">
                                    {(['S', 'M', 'L'] as const).map((size) => (
                                        <button
                                            key={size}
                                            type="button"
                                            onClick={() => setFormData(prev => ({ ...prev, wheelchairSize: size }))}
                                            className={`flex-1 py-4 text-lg font-semibold rounded-2xl transition ${formData.wheelchairSize === size
                                                ? 'bg-blue-600 text-white shadow'
                                                : 'bg-gray-100 hover:bg-gray-200'}`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <label className="text-sm font-medium text-gray-700 mb-2 block">Assigned Driver (Optional)</label>
                            <input type="text" name="driverAssign" value={formData.driverAssign} onChange={handleChange} className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500" placeholder="Driver name or ID" />
                        </div>
                    </div>

                    {/* Notes & Payment Sections can be added similarly — let me know if you want them expanded in the same beautiful style */}

                    {/* Submit Button */}
                    <div className="flex justify-center pt-8">
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-xl px-16 py-6 rounded-3xl shadow-xl transition transform hover:scale-105 active:scale-95"
                        >
                            Confirm & Book Trip
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookingForm;