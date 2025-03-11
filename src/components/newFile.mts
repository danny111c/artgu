window.addEventListener('DOMContentLoaded', () => {
const whatsappButton = document.getElementById('whatsappButton');
const emailButton = document.getElementById('emailButton');
const whatsappContent = document.getElementById('whatsappContent');
const emailContent = document.getElementById('emailContent');

whatsappButton.addEventListener('click', () => {
whatsappButton.classList.add('border-b-2', 'border-[#74B634]', 'text-[#2E2B2C]', 'font-semibold');
emailButton.classList.remove('border-b-2', 'border-[#74B634]', 'text-[#2E2B2C]', 'font-semibold');
emailButton.classList.add('text-gray-500');
whatsappContent.classList.remove('hidden');
emailContent.classList.add('hidden');
});

emailButton.addEventListener('click', () => {
emailButton.classList.add('border-b-2', 'border-[#74B634]', 'text-[#2E2B2C]', 'font-semibold');
whatsappButton.classList.remove('border-b-2', 'border-[#74B634]', 'text-[#2E2B2C]', 'font-semibold');
whatsappButton.classList.add('text-gray-500');
emailContent.classList.remove('hidden');
whatsappContent.classList.add('hidden');
});
});
