
	// Interaktif: Tambah keahlian
	var addSkillBtn = document.getElementById('add-skill');
	if (addSkillBtn) {
		addSkillBtn.onclick = function() {
			const input = document.getElementById('new-skill');
			const value = input.value.trim();
			if (value) {
				const li = document.createElement('li');
				li.textContent = value;
				document.getElementById('skills-list').appendChild(li);
				input.value = '';
			}
		};
	}

	// Interaktif: Modal detail proyek
	window.showProjectDetail = function(title, desc) {
		document.getElementById('modal-title').textContent = title;
		document.getElementById('modal-desc').textContent = desc;
		document.getElementById('project-modal').style.display = 'block';
	};
	var closeModalBtn = document.getElementById('close-modal');
	if (closeModalBtn) {
		closeModalBtn.onclick = function() {
			document.getElementById('project-modal').style.display = 'none';
		};
	}
	window.onclick = function(event) {
		const modal = document.getElementById('project-modal');
		if (event.target === modal) {
			modal.style.display = 'none';
		}
	};
