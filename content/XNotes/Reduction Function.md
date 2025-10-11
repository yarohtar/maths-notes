Let $L,L'\subseteq \mathbb{B}$. 
A total [[Foundations/Computable]] function $f:\mathbb{B}\to \mathbb{B}$ is a reduction from $L$ to $L'$ if for all $w\in \mathbb{B}$ we have:
$$
w \in L \iff f(w) \in L'
$$
We also say that $L$ is many-to-one reducible to $L'$.
We write $L\leq_{m} L'$
Note that $\leq_{m}$ is a [[XNotes/Partial Preorder]]

The following proposition says that $L$ is at most as complicated as $L'$ (in the computability sense).
### Proposition
If $L\leq_{m} L'$ and $L'$ is [[Foundations/Computable]], then so is $L$.
If $L\leq_{m}L'$ and $L'$ is [[Foundations/Computably Enumerable]], then so is $L$.