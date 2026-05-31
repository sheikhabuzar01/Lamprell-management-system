// mockDb.js - Database Service using localStorage

const STORAGE_KEY = 'attorney_case_manager_db';

const initialData = {
  organizations: [
    {
      id: 'org-1',
      name: 'Etisalat (e&)',
      industry: 'Telecommunications & Digital Services',
      taxId: 'TRN-100039428100003',
      primaryContact: 'Hatem Dowidar',
      email: 'legal@etisalat.ae',
      phone: '+971 4 101 2222',
      status: 'Active',
    },
    {
      id: 'org-2',
      name: 'Government of Sharjah – Department of Civil Aviation',
      industry: 'Government / Civil Aviation',
      taxId: 'GOV-SHJ-DCA-0011',
      primaryContact: 'Ali Salim Al Midfa',
      email: 'legal@sharjahaviation.ae',
      phone: '+971 6 558 1111',
      status: 'Active',
    },
    {
      id: 'org-3',
      name: 'Técnicas Reunidas',
      industry: 'Engineering, Procurement & Construction (EPC)',
      taxId: 'TRN-100299471800003',
      primaryContact: 'Carlos Martínez',
      email: 'uae.legal@tecnicasreunidas.es',
      phone: '+971 2 644 8800',
      status: 'Active',
    }
  ],
  branches: [
    {
      id: 'branch-1-1',
      orgId: 'org-1',
      name: 'Etisalat Headquarters (Abu Dhabi)',
      city: 'Abu Dhabi',
      address: 'Etisalat Building, Sheikh Zayed The First Street, Abu Dhabi',
      contactPerson: 'Hatem Dowidar',
      email: 'hq-auh@etisalat.ae'
    },
    {
      id: 'branch-1-2',
      orgId: 'org-1',
      name: 'Etisalat Tower – Dubai',
      city: 'Dubai',
      address: 'Etisalat Tower, Oud Metha Road, Dubai',
      contactPerson: 'Khalifa Al Shamsi',
      email: 'dxb@etisalat.ae'
    },
    {
      id: 'branch-2-1',
      orgId: 'org-2',
      name: 'Sharjah International Airport – Civil Aviation Dept.',
      city: 'Sharjah',
      address: 'Sharjah International Airport, Airport Road, Sharjah',
      contactPerson: 'Ali Salim Al Midfa',
      email: 'shj-airport@sharjahaviation.ae'
    },
    {
      id: 'branch-3-1',
      orgId: 'org-3',
      name: 'Técnicas Reunidas Gulf Office',
      city: 'Abu Dhabi',
      address: 'Al Maqam Tower, ADGM, Al Maryah Island, Abu Dhabi',
      contactPerson: 'Carlos Martínez',
      email: 'gulf@tecnicasreunidas.es'
    }
  ],
  cases: [
    {
      id: 'case-1',
      orgId: 'org-1',
      branchId: 'branch-1-2',
      caseNumber: 'DXB-COM-2026-1184',
      title: 'Etisalat (e&) v. Gulf Fiber Networks LLC (Infrastructure Supply Dispute)',
      description: 'Commercial claim before the Dubai Courts of First Instance over breach of a fibre-optic network supply and maintenance contract.',
      court: 'Dubai Courts of First Instance',
      judge: 'Judge Abdulla Al Marri',
      type: 'Commercial Dispute',
      stage: 'Discovery',
      status: 'Active',
      priority: 'High',
      filingDate: '2026-01-18'
    },
    {
      id: 'case-2',
      orgId: 'org-1',
      branchId: 'branch-1-1',
      caseNumber: 'ADF-REG-2026-045',
      title: 'Etisalat (e&) v. TDRA (Spectrum Fee Reassessment Appeal)',
      description: 'Regulatory appeal before the Abu Dhabi Federal Court challenging the retrospective reassessment of radio spectrum usage fees.',
      court: 'Abu Dhabi Federal Court of First Instance',
      judge: 'Judge Mariam Al Suwaidi',
      type: 'Regulatory Appeal',
      stage: 'Pleading',
      status: 'Active',
      priority: 'Medium',
      filingDate: '2026-03-12'
    },
    {
      id: 'case-3',
      orgId: 'org-2',
      branchId: 'branch-2-1',
      caseNumber: 'SHJ-CIV-2025-2207',
      title: 'Sharjah Dept. of Civil Aviation v. Skyline Contracting LLC (Terminal Expansion Delay)',
      description: 'Claim before the Sharjah Federal Court seeking liquidated damages for delayed delivery of the airport terminal expansion works.',
      court: 'Sharjah Federal Court of First Instance',
      judge: 'Judge Khalid Al Tunaiji',
      type: 'Construction Dispute',
      stage: 'Trial',
      status: 'Active',
      priority: 'High',
      filingDate: '2025-11-06'
    },
    {
      id: 'case-4',
      orgId: 'org-3',
      branchId: 'branch-3-1',
      caseNumber: 'DIFC-LCIA-2026-0098',
      title: 'Técnicas Reunidas v. Emirates Refinery Co. (EPC Payment Arbitration)',
      description: 'DIFC-LCIA arbitration concerning withheld milestone payments and disputed variation orders on a refinery EPC project.',
      court: 'DIFC-LCIA Arbitration Centre',
      judge: 'Tribunal Chair Dr. Yousef Al Nuaimi',
      type: 'Arbitration',
      stage: 'Discovery',
      status: 'Active',
      priority: 'Low',
      filingDate: '2026-04-22'
    }
  ],
  hearings: [
    {
      id: 'hearing-1',
      caseId: 'case-1',
      hearingDate: '2026-06-15',
      time: '10:00 AM',
      purpose: 'Case Management Conference & Document Production',
      courtroom: 'Dubai Courts – Hall 5',
      status: 'Scheduled',
      outcome: 'Scheduled',
      notes: ''
    },
    {
      id: 'hearing-2',
      caseId: 'case-2',
      hearingDate: '2026-05-28',
      time: '02:00 PM',
      purpose: 'Expert Report Submission on Spectrum Valuation',
      courtroom: 'Abu Dhabi Federal Court – Room 12',
      status: 'Scheduled',
      outcome: 'Scheduled',
      notes: ''
    },
    {
      id: 'hearing-3',
      caseId: 'case-3',
      hearingDate: '2026-06-02',
      time: '09:30 AM',
      purpose: 'Witness Examination (Project Engineer)',
      courtroom: 'Sharjah Federal Court – Room B',
      status: 'Scheduled',
      outcome: 'Scheduled',
      notes: ''
    },
    {
      id: 'hearing-4',
      caseId: 'case-4',
      hearingDate: '2026-05-22',
      time: '11:00 AM',
      purpose: 'Procedural Hearing on Tribunal Jurisdiction',
      courtroom: 'DIFC Dispute Resolution – Hearing Room 3',
      status: 'Scheduled',
      outcome: 'Scheduled',
      notes: ''
    }
  ],
  caseNotes: [],
  timeEntries: [],
  invoices: [],
  documents: [
    {
      id: 'doc-1',
      caseId: 'case-1',
      orgId: 'org-1',
      name: 'DXB_Statement_of_Claim_GulfFiber.pdf',
      type: 'pdf',
      size: '2.4 MB',
      uploadDate: '2026-01-18',
      category: 'Pleading'
    },
    {
      id: 'doc-2',
      caseId: 'case-1',
      orgId: 'org-1',
      name: 'GulfFiber_Statement_of_Defence.pdf',
      type: 'pdf',
      size: '1.8 MB',
      uploadDate: '2026-02-22',
      category: 'Pleading'
    },
    {
      id: 'doc-3',
      caseId: 'case-2',
      orgId: 'org-1',
      name: 'TDRA_Spectrum_Fee_Appeal_Motion.docx',
      type: 'docx',
      size: '520 KB',
      uploadDate: '2026-04-12',
      category: 'Motion'
    },
    {
      id: 'doc-4',
      caseId: 'case-3',
      orgId: 'org-2',
      name: 'Terminal_Expansion_EPC_Contract_Executed.pdf',
      type: 'pdf',
      size: '14.2 MB',
      uploadDate: '2025-11-10',
      category: 'Evidence'
    },
    {
      id: 'doc-5',
      caseId: 'case-4',
      orgId: 'org-3',
      name: 'Refinery_EPC_Agreement_TechnicasReunidas.pdf',
      type: 'pdf',
      size: '890 KB',
      uploadDate: '2026-04-22',
      category: 'Contract'
    }
  ],
  tasks: [
    {
      id: 'task-1',
      caseId: 'case-1',
      title: 'Draft reply to Gulf Fiber statement of defence',
      dueDate: '2026-06-01',
      assignedTo: 'Lead Counsel / Commercial Disputes',
      status: 'Pending',
      priority: 'High'
    },
    {
      id: 'task-2',
      caseId: 'case-1',
      title: 'Compile fibre network delivery logs for document production',
      dueDate: '2026-05-30',
      assignedTo: 'Discovery Team',
      status: 'Pending',
      priority: 'High'
    },
    {
      id: 'task-3',
      caseId: 'case-2',
      title: 'File power of attorney and TDRA correspondence bundle',
      dueDate: '2026-05-24',
      assignedTo: 'Regulatory Partner',
      status: 'Pending',
      priority: 'Medium'
    },
    {
      id: 'task-4',
      caseId: 'case-3',
      title: 'Finalize delay analysis and quantum report',
      dueDate: '2026-05-25',
      assignedTo: 'Litigation Team',
      status: 'Completed',
      priority: 'High'
    },
    {
      id: 'task-5',
      caseId: 'case-4',
      title: 'Draft jurisdiction objection submission for tribunal',
      dueDate: '2026-05-21',
      assignedTo: 'Associate',
      status: 'Pending',
      priority: 'High'
    }
  ]
};

// Database class to read/write state
class AttorneyDb {
  constructor() {
    this.data = this._load();
  }

  _load() {
    const raw = localStorage.getItem(STORAGE_KEY);
    let data = null;
    if (raw) {
      try {
        data = JSON.parse(raw);
        // Automatically migrate/reset stale seed templates (US or Pakistan) to the Dubai/UAE seeds
        const staleSeedNames = ['OmniCorp Industries', 'Systems Limited Pakistan'];
        if (data.organizations && data.organizations.some(org => staleSeedNames.includes(org.name))) {
          console.warn('Stale seed data detected. Resetting to Dubai, UAE region seeds...');
          localStorage.removeItem(STORAGE_KEY);
          data = null;
        }
      } catch (e) {
        data = null;
      }
    }
    if (!data) {
      this._save(initialData);
      return JSON.parse(JSON.stringify(initialData));
    }
    // Forward-compat migrations for newly added schema
    if (!Array.isArray(data.caseNotes)) {
      data.caseNotes = [];
    }
    if (!Array.isArray(data.timeEntries)) {
      data.timeEntries = [];
    }
    if (!Array.isArray(data.invoices)) {
      data.invoices = [];
    }
    if (Array.isArray(data.hearings)) {
      data.hearings = data.hearings.map(h => ({
        ...h,
        outcome: h.outcome || 'Scheduled',
        notes: typeof h.notes === 'string' ? h.notes : ''
      }));
    }
    return data;
  }

  _save(newData) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    this.data = newData;
    // Dispatch custom event to notify components of updates
    window.dispatchEvent(new CustomEvent('db-update', { detail: newData }));
  }

  // Generic getter
  getData() {
    return this.data;
  }

  // --- ORGANIZATIONS ---
  addOrganization(org) {
    const data = this._load();
    const newOrg = { id: `org-${Date.now()}`, ...org, status: org.status || 'Active' };
    data.organizations.push(newOrg);
    this._save(data);
    return newOrg;
  }

  updateOrganization(id, updatedFields) {
    const data = this._load();
    data.organizations = data.organizations.map(o => o.id === id ? { ...o, ...updatedFields } : o);
    this._save(data);
    return data.organizations.find(o => o.id === id);
  }

  deleteOrganization(id) {
    const data = this._load();
    // Also clean up branches, cases, documents, tasks, hearings
    data.organizations = data.organizations.filter(o => o.id !== id);
    data.branches = data.branches.filter(b => b.orgId !== id);
    
    // Find all cases related to this org to clean hearings, docs, tasks
    const caseIds = data.cases.filter(c => c.orgId === id).map(c => c.id);
    data.cases = data.cases.filter(c => c.orgId !== id);
    data.documents = data.documents.filter(d => d.orgId !== id && !caseIds.includes(d.caseId));
    data.tasks = data.tasks.filter(t => !caseIds.includes(t.caseId));
    data.hearings = data.hearings.filter(h => !caseIds.includes(h.caseId));
    data.caseNotes = (data.caseNotes || []).filter(n => !caseIds.includes(n.caseId));
    data.timeEntries = (data.timeEntries || []).filter(te => !caseIds.includes(te.caseId));
    data.invoices = (data.invoices || []).filter(inv => inv.orgId !== id);

    this._save(data);
  }

  // --- BRANCHES ---
  addBranch(branch) {
    const data = this._load();
    const newBranch = { id: `branch-${Date.now()}`, ...branch };
    data.branches.push(newBranch);
    this._save(data);
    return newBranch;
  }

  updateBranch(id, updatedFields) {
    const data = this._load();
    data.branches = data.branches.map(b => b.id === id ? { ...b, ...updatedFields } : b);
    this._save(data);
    return data.branches.find(b => b.id === id);
  }

  deleteBranch(id) {
    const data = this._load();
    data.branches = data.branches.filter(b => b.id !== id);

    // Find all cases associated with this branch to clean up
    const caseIds = data.cases.filter(c => c.branchId === id).map(c => c.id);
    data.cases = data.cases.filter(c => c.branchId !== id);
    data.documents = data.documents.filter(d => !caseIds.includes(d.caseId));
    data.tasks = data.tasks.filter(t => !caseIds.includes(t.caseId));
    data.hearings = data.hearings.filter(h => !caseIds.includes(h.caseId));
    data.caseNotes = (data.caseNotes || []).filter(n => !caseIds.includes(n.caseId));
    data.timeEntries = (data.timeEntries || []).filter(te => !caseIds.includes(te.caseId));

    this._save(data);
  }

  // --- CASES ---
  addCase(c) {
    const data = this._load();
    const newCase = { 
      id: `case-${Date.now()}`, 
      ...c, 
      status: c.status || 'Active', 
      filingDate: c.filingDate || new Date().toISOString().split('T')[0] 
    };
    data.cases.push(newCase);
    this._save(data);
    return newCase;
  }

  updateCase(id, updatedFields) {
    const data = this._load();
    data.cases = data.cases.map(c => c.id === id ? { ...c, ...updatedFields } : c);
    this._save(data);
    return data.cases.find(c => c.id === id);
  }

  deleteCase(id) {
    const data = this._load();
    data.cases = data.cases.filter(c => c.id !== id);
    data.documents = data.documents.filter(d => d.caseId !== id);
    data.tasks = data.tasks.filter(t => t.caseId !== id);
    data.hearings = data.hearings.filter(h => h.caseId !== id);
    data.caseNotes = (data.caseNotes || []).filter(n => n.caseId !== id);
    data.timeEntries = (data.timeEntries || []).filter(te => te.caseId !== id);
    this._save(data);
  }

  // --- HEARINGS ---
  addHearing(h) {
    const data = this._load();
    const newHearing = {
      id: `hearing-${Date.now()}`,
      ...h,
      status: h.status || 'Scheduled',
      outcome: h.outcome || 'Scheduled',
      notes: typeof h.notes === 'string' ? h.notes : ''
    };
    data.hearings.push(newHearing);
    this._save(data);
    return newHearing;
  }

  updateHearing(id, updatedFields) {
    const data = this._load();
    data.hearings = data.hearings.map(h => h.id === id ? { ...h, ...updatedFields } : h);
    this._save(data);
    return data.hearings.find(h => h.id === id);
  }

  deleteHearing(id) {
    const data = this._load();
    data.hearings = data.hearings.filter(h => h.id !== id);
    this._save(data);
  }

  // --- DOCUMENTS ---
  async addDocument(doc, fileObj) {
    const data = this._load();
    const newDoc = { 
      id: `doc-${Date.now()}`, 
      ...doc, 
      uploadDate: new Date().toISOString().split('T')[0] 
    };
    data.documents.push(newDoc);
    this._save(data);
    if (fileObj) {
      await saveFileContent(newDoc.id, fileObj);
    }
    return newDoc;
  }

  async deleteDocument(id) {
    const data = this._load();
    data.documents = data.documents.filter(d => d.id !== id);
    this._save(data);
    await deleteFileContent(id);
  }

  async getFileContent(id) {
    return await getFileContent(id);
  }

  // --- TASKS ---
  addTask(t) {
    const data = this._load();
    const newTask = { id: `task-${Date.now()}`, ...t, status: t.status || 'Pending' };
    data.tasks.push(newTask);
    this._save(data);
    return newTask;
  }

  updateTask(id, updatedFields) {
    const data = this._load();
    data.tasks = data.tasks.map(t => t.id === id ? { ...t, ...updatedFields } : t);
    this._save(data);
    return data.tasks.find(t => t.id === id);
  }

  deleteTask(id) {
    const data = this._load();
    data.tasks = data.tasks.filter(t => t.id !== id);
    this._save(data);
  }

  reorderTasks(draggedId, targetTaskId) {
    const data = this._load();
    const draggedIndex = data.tasks.findIndex(t => t.id === draggedId);
    const targetIndex = data.tasks.findIndex(t => t.id === targetTaskId);
    if (draggedIndex === -1 || targetIndex === -1) return;

    const [draggedTask] = data.tasks.splice(draggedIndex, 1);
    data.tasks.splice(targetIndex, 0, draggedTask);
    this._save(data);
  }

  moveTaskToEnd(id) {
    const data = this._load();
    const index = data.tasks.findIndex(t => t.id === id);
    if (index !== -1) {
      const [task] = data.tasks.splice(index, 1);
      data.tasks.push(task);
      this._save(data);
    }
  }

  // --- CASE NOTES ---
  addNote(note) {
    const data = this._load();
    if (!Array.isArray(data.caseNotes)) data.caseNotes = [];
    const newNote = {
      id: `note-${Date.now()}`,
      caseId: note.caseId,
      body: note.body || '',
      author: note.author || '',
      createdAt: new Date().toISOString()
    };
    data.caseNotes.push(newNote);
    this._save(data);
    return newNote;
  }

  deleteNote(id) {
    const data = this._load();
    data.caseNotes = (data.caseNotes || []).filter(n => n.id !== id);
    this._save(data);
  }

  getNotesForCase(caseId) {
    const data = this._load();
    return (data.caseNotes || [])
      .filter(n => n.caseId === caseId)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  // --- TIME ENTRIES ---
  addTimeEntry(entry) {
    const data = this._load();
    if (!Array.isArray(data.timeEntries)) data.timeEntries = [];
    const newEntry = {
      id: `time-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      caseId: entry.caseId,
      attorneyName: entry.attorneyName || '',
      date: entry.date || new Date().toISOString().split('T')[0],
      hours: Number(entry.hours) || 0,
      rate: Number(entry.rate) || 0,
      currency: entry.currency || 'AED',
      description: entry.description || '',
      billable: entry.billable !== false,
      invoiceId: null
    };
    data.timeEntries.push(newEntry);
    this._save(data);
    return newEntry;
  }

  updateTimeEntry(id, patch) {
    const data = this._load();
    data.timeEntries = (data.timeEntries || []).map(te => te.id === id ? { ...te, ...patch } : te);
    this._save(data);
    return data.timeEntries.find(te => te.id === id);
  }

  deleteTimeEntry(id) {
    const data = this._load();
    data.timeEntries = (data.timeEntries || []).filter(te => te.id !== id);
    this._save(data);
  }

  getTimeForCase(caseId) {
    const data = this._load();
    return (data.timeEntries || [])
      .filter(te => te.caseId === caseId)
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  // --- INVOICES ---
  createInvoice({ orgId, invoiceNumber, issueDate, dueDate, taxPercent = 0, notes = '', currency = 'AED' }, timeEntryIds = []) {
    const data = this._load();
    if (!Array.isArray(data.invoices)) data.invoices = [];
    if (!Array.isArray(data.timeEntries)) data.timeEntries = [];

    const entries = data.timeEntries.filter(te => timeEntryIds.includes(te.id) && !te.invoiceId);
    const lineItems = entries.map(te => ({
      timeEntryId: te.id,
      description: te.description || '',
      date: te.date,
      hours: Number(te.hours) || 0,
      rate: Number(te.rate) || 0,
      amount: (Number(te.hours) || 0) * (Number(te.rate) || 0)
    }));
    const subtotal = lineItems.reduce((sum, li) => sum + li.amount, 0);
    const tax = subtotal * (Number(taxPercent) || 0) / 100;
    const total = subtotal + tax;

    const newInvoice = {
      id: `invoice-${Date.now()}`,
      orgId,
      invoiceNumber: invoiceNumber || `INV-${Date.now()}`,
      issueDate: issueDate || new Date().toISOString().split('T')[0],
      dueDate: dueDate || '',
      currency,
      taxPercent: Number(taxPercent) || 0,
      lineItems,
      subtotal,
      tax,
      total,
      status: 'Draft',
      notes
    };
    data.invoices.push(newInvoice);

    // Link time entries to invoice
    data.timeEntries = data.timeEntries.map(te =>
      timeEntryIds.includes(te.id) && !te.invoiceId
        ? { ...te, invoiceId: newInvoice.id }
        : te
    );

    this._save(data);
    return newInvoice;
  }

  updateInvoiceStatus(id, status) {
    const data = this._load();
    data.invoices = (data.invoices || []).map(inv => inv.id === id ? { ...inv, status } : inv);
    this._save(data);
    return data.invoices.find(inv => inv.id === id);
  }

  deleteInvoice(id) {
    const data = this._load();
    data.invoices = (data.invoices || []).filter(inv => inv.id !== id);
    // Unlink time entries
    data.timeEntries = (data.timeEntries || []).map(te =>
      te.invoiceId === id ? { ...te, invoiceId: null } : te
    );
    this._save(data);
  }

  getInvoicesForOrg(orgId) {
    const data = this._load();
    return (data.invoices || [])
      .filter(inv => inv.orgId === orgId)
      .sort((a, b) => new Date(b.issueDate) - new Date(a.issueDate));
  }
}

export const db = new AttorneyDb();

// Simple IndexedDB database configuration for storing binary vault files
const DB_NAME = 'LamprellMCFilesDB';
const STORE_NAME = 'files';

function openFileDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = (e) => resolve(e.target.result);
    request.onerror = (e) => reject(e.target.error);
  });
}

async function saveFileContent(docId, file) {
  try {
    const db = await openFileDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const request = store.put(file, docId);
      request.onsuccess = () => resolve();
      request.onerror = (e) => reject(e.target.error);
    });
  } catch (err) {
    console.error('IndexedDB save error:', err);
  }
}

async function getFileContent(docId) {
  try {
    const db = await openFileDB();
    const blob = await new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const request = store.get(docId);
      request.onsuccess = (e) => resolve(e.target.result);
      request.onerror = (e) => reject(e.target.error);
    });
    if (blob) return blob;
    
    // Seed documents fallback: decode a valid blank 1-page PDF
    const b64 = 'JVBERi0xLjUKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFszIDAgUl0KL0NvdW50IDEKPj4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAyIDAgUgovTWVkaWFCb3ggWzAgMCA1OTUgODQyXQovUmVzb3VyY2VzIDw8Pj4KL0NvbnRlbnRzIDQgMCBSCj4+CmVuZG9iago0IDAgb2JqCjw8Ci9MZW5ndGggMAo+PgpzdHJlYW0KZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgNQowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMDkgMDAwMDAgbiAKMDAwMDAwMDA1NiAwMDAwMCBuIAowMDAwMDAwMTExIDAwMDAwIG4gCjAwMDAwMDAyMTIgMDAwMDAgbiAKdHJhaWxlcgo8PAovU2l6ZSA1Ci9Sb290IDEgMCBSCj4+CnN0YXJ0eHJlZgoyNjMKJSVFT0Y=';
    const binaryStr = atob(b64);
    const len = binaryStr.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryStr.charCodeAt(i);
    }
    return new Blob([bytes], { type: 'application/pdf' });
  } catch (err) {
    console.error('IndexedDB get error:', err);
    return new Blob(['Simulated document contents.'], { type: 'text/plain' });
  }
}

async function deleteFileContent(docId) {
  try {
    const db = await openFileDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const request = store.delete(docId);
      request.onsuccess = () => resolve();
      request.onerror = (e) => reject(e.target.error);
    });
  } catch (err) {
    console.error('IndexedDB delete error:', err);
  }
}
