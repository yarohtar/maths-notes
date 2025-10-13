Let $F:\mathbb{B}^{n+1}\dashrightarrow \mathbb{B}^{n+1}$ be any [[Foundations/Partial Function]]. We say that a [[Foundations/Register Machine]] $M$ performs the operation $F$ if for all $\vec{w}\in \mathbb{B}^{n+1}$:
1. If $F(\vec{w})\downarrow=\vec{v}$ then $M$ converges on input $\vec{w}^{+}$ with register content $\vec{v}^{+}$
2. If $F(\vec{w})\uparrow$ then $M$ diverges on input $\vec{w}^{+}$
(Note that we used the $^{+}$ to indicate padding for scratch space that the register machine may use for memory purposes. I will omit that padding in my notes going forward.)