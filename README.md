# djangos-notebook
---
> 'What does it mean to be a **Notebook** application?'  

Functional Requirements  
--- 
#### Notebooks Application v1.0
##### In Scope  
- Users can create a *Notebook*.  
- Users see a list of created *Notebooks*.  
- *Notebooks* can be *Deleted*.
- *Notebooks* can be *Editted*.
- Users can add a new *Page* to a *Notebook*.
- Users can delete a *Page* from a *Notebook*.
- Users can edit a *Page* from a *Notebook*.
- User Authentication.

##### Out Of Scope(For now) 
- UI Enhancements (D&D, Darkmode, etc.)
- Voting/Ranking
- Categories/Subs
- Markdown formatting
- Code Snippets
- Photo uploads/insertions
- Photo *Notebook* Covers
- Drag n drop *Pages* for ordering
- Drag n drop *Notebooks* for ordering
- Export *Notebooks* as Markdown

Non-Functional Requirements  
---
- **Availability**: If a User opens the app they always see something.
- **Reliability/Redundancy**: *Notebooks* are never lost.
- **Latency**: Response times < 200m/s.

### Database Design(Models, Schema)
> 'What does it mean to be a **Notebook**?'
- Pages
- Owner
- *Notebook* Title

> 'How should we store the **Notebooks**?'
- PostgreSQL(Relational, SQL)  

| Notebook |
| ------ |
| *id* **Int** | 
| *owner* **Str** | 
| *title* **Str** | 
| *pages* **Varchar** |

- MongoDB(Non-Relational, NoSQL)  
```
{
    notebook1: {
        _id: 1,
        pages: {
            content: ''
        },
        title: '',
        owner: ''
    },
    notebook2: {
        _id: 2,
        pages: {
            content: ''
        },
        title: '',
        owner: ''
    }
}
```

### Capacity & Constraints
> 'How much *__storage space__* do we need?'  

```
_id: 4 bytes  
owner: 20 bytes  
title: 20 bytes  
page: 1000 bytes ⇽(Max chars of *Page*)

total: ~1,044 bytes

1 Owner * ~1,044 bytes * 20 Pages(Max # of Pages) * 10 Notebooks(Max # of Notebooks) ⤦
Grand Total: 208,800 bytes(0.19mb)
```