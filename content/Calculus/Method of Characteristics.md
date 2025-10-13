Consider the equation of form:
$$a(x,y){\partial u\over \partial x} + b(x,y){\partial u\over \partial y}=c(x,y,u)$$
with initial data along some curve $u(x(t),y(t))=h(t)$.
For fixed $t$, find $A=(x(t),y(t))$, a point on initial curve. 
Also find $x_t(s)$ and $y_t(s)$ satisfying:
$${dx_t\over ds}=a(x_t,y_t)\quad\quad {dy_t\over ds}=b(x_t,y_t)$$
with initial data $(x_t(0),y_t(0))=A$.
Hence letting $z(s)=u(x_t(s),y_t(s))$ we find
$${dz\over ds}=c(x_t,y_t,u)$$
Now this gives $u$ in terms of $s$ and $t$.
So find $s$ and $t$ in terms of $x$ and $y$ by inverting $x_t(s)$ and $y_t(s)$. 
Hence we got $u(x,y)$. 
yay.