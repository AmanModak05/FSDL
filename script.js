document.addEventListener('DOMContentLoaded',()=>{
  const form = document.getElementById('contactForm');
  const errorsEl = document.querySelector('.errors');

  function getErrors(form){
    const errs = [];
    if(!form.name.value.trim()) errs.push('Name is required.');
    if(!form.email.checkValidity()) errs.push('Please enter a valid email.');
    if(form.password.value.length < 6) errs.push('Password must be at least 6 characters.');
    const mobile = form.mobile.value.replace(/\D/g,'');
    if(!/^\d{10}$/.test(mobile)) errs.push('Mobile Number must be 10 digits.');
    return errs;
  }

  form.addEventListener('submit', e=>{
    e.preventDefault();
    const errs = getErrors(form);
    if(errs.length){
      errorsEl.textContent = errs.join(' ');
      errorsEl.focus && errorsEl.focus();
      return;
    }

    errorsEl.textContent = '';
    // For demo purposes, we'll log the form data and show a success message.
    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      password: form.password.value,
      mobile: form.mobile.value.replace(/\D/g,'')
    };
    console.log('Form submitted', data);
    errorsEl.style.color = 'green';
    errorsEl.textContent = 'Form submitted (demo)';
  });
});
