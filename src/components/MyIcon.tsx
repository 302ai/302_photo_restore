import React from 'react';
import Icon, { HomeOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import type { GetProps } from 'antd';

type CustomIconComponentProps = GetProps<typeof Icon>;

const SettingSvg = () => (
    <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8346" data-darkreader-inline-fill="" width="16" height="16"><path d="M396.72 320.592a141.184 141.184 0 0 1-99.824 15.92 277.648 277.648 0 0 0-45.344 74.576 141.216 141.216 0 0 1 37.52 95.952 141.248 141.248 0 0 1-41.728 100.32 274.4 274.4 0 0 0 49.952 86.224 141.264 141.264 0 0 1 107.168 14.176 141.216 141.216 0 0 1 63.984 79.296 274.72 274.72 0 0 0 86.816-1.92 141.248 141.248 0 0 1 66.016-86.304 141.216 141.216 0 0 1 101.856-15.488 277.648 277.648 0 0 0 41.92-76.544 141.184 141.184 0 0 1-36.128-94.4c0-34.912 12.768-67.68 34.816-92.96a274.736 274.736 0 0 0-38.192-70.032 141.264 141.264 0 0 1-105.792-14.56 141.312 141.312 0 0 1-67.168-90.912 274.4 274.4 0 0 0-92.784 0.016 141.152 141.152 0 0 1-63.088 76.64z m22.56-116.656c57.312-16 119.024-16.224 178.016 1.216a93.44 93.44 0 0 0 142.288 86.736 322.64 322.64 0 0 1 79.104 142.656 93.328 93.328 0 0 0-41.76 77.84 93.36 93.36 0 0 0 42.88 78.592 322.832 322.832 0 0 1-34.208 85.232 323.392 323.392 0 0 1-47.968 63.568 93.392 93.392 0 0 0-92.352 0.64 93.408 93.408 0 0 0-46.688 83.616 322.704 322.704 0 0 1-171.424 3.84 93.376 93.376 0 0 0-46.704-78.544 93.408 93.408 0 0 0-95.184 1.008A322.432 322.432 0 0 1 192 589.28a93.408 93.408 0 0 0 49.072-82.24c0-34.128-18.304-64-45.632-80.288a323.392 323.392 0 0 1 31.088-73.328 322.832 322.832 0 0 1 56.704-72.256 93.36 93.36 0 0 0 89.488-2.144 93.328 93.328 0 0 0 46.56-75.088z m92.208 385.28a68.864 68.864 0 1 0 0-137.76 68.864 68.864 0 0 0 0 137.76z m0 48a116.864 116.864 0 1 1 0-233.76 116.864 116.864 0 0 1 0 233.76z" p-id="8347"></path></svg>
)

const RobotSvg = () => (
    <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12079" data-darkreader-inline-fill="" width="16" height="16"><path d="M717.12 274H762c82.842 0 150 67.158 150 150v200c0 82.842-67.158 150-150 150H262c-82.842 0-150-67.158-150-150V424c0-82.842 67.158-150 150-150h44.88l-18.268-109.602c-4.086-24.514 12.476-47.7 36.99-51.786 24.514-4.086 47.7 12.476 51.786 36.99l20 120c0.246 1.472 0.416 2.94 0.516 4.398h228.192c0.1-1.46 0.27-2.926 0.516-4.398l20-120c4.086-24.514 27.272-41.076 51.786-36.99 24.514 4.086 41.076 27.272 36.99 51.786L717.12 274zM262 364c-33.138 0-60 26.862-60 60v200c0 33.138 26.862 60 60 60h500c33.138 0 60-26.862 60-60V424c0-33.138-26.862-60-60-60H262z m50 548c-24.852 0-45-20.148-45-45S287.148 822 312 822h400c24.852 0 45 20.148 45 45S736.852 912 712 912H312z m-4-428c0-24.852 20.148-45 45-45S398 459.148 398 484v40c0 24.852-20.148 45-45 45S308 548.852 308 524v-40z m318 0c0-24.852 20.148-45 45-45S716 459.148 716 484v40c0 24.852-20.148 45-45 45S626 548.852 626 524v-40z" fill="#444444" p-id="12080" data-darkreader-inline-fill="" ></path></svg>
)

const SummarySvg = () => (
    <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6788" data-darkreader-inline-fill="" width="16" height="16"><path d="M288 96a32 32 0 1 1 0 64h-64a32 32 0 0 0-32 32v672c0 17.706667 14.293333 32 32 32h576a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32h-64a32 32 0 1 1 0-64h64A96 96 0 0 1 896 192v672a96 96 0 0 1-96 96H224A96 96 0 0 1 128 864V192a96 96 0 0 1 96-96z m64 384A32 32 0 0 1 384 512v192.981333a32 32 0 1 1-64 0V512a32 32 0 0 1 32-32zM512 416a32 32 0 0 1 32 32v256.981333a32 32 0 1 1-64 0V448a32 32 0 0 1 32-32z m160-128a32 32 0 0 1 32 32v384.981333a32 32 0 1 1-64 0V320a32 32 0 0 1 32-32zM640 64a32 32 0 0 1 32 32v64a32 32 0 0 1-32 32H384.085333a32 32 0 0 1-32-32v-64a32 32 0 0 1 32-32z" fill="#000000" p-id="6789" data-darkreader-inline-fill="" ></path></svg>
)

const PolishSvg = () => (
    <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7185" data-darkreader-inline-fill="" width="16" height="16"><path d="M955.52 446.186667C932.266667 299.52 844.053333 177.706667 713.386667 112c-130.666667-65.706667-280.533333-64.106667-411.2 4.266667C134.293333 204.053333 38.506667 395.84 69.333333 582.4c2.24 13.546667 5.013333 26.773333 8.32 39.786667 16.96 66.346667 61.013333 123.626667 120.96 157.12 59.52 33.173333 129.813333 40 197.76 18.773333 12.693333-3.946667 24.533333-8.64 35.733334-13.12 18.986667-7.466667 35.52-13.973333 46.506666-12.266667 14.506667 2.24 24.106667 7.893333 28.8 16.96 5.866667 11.413333 4.053333 28.48-4.693333 45.76-13.866667 27.2-10.986667 59.84 7.573333 85.013334 15.893333 21.546667 40.32 33.92 66.026667 33.92 4.586667 0 9.28-0.426667 13.866667-1.28 68.266667-11.946667 131.84-39.36 189.013333-81.6 132.586667-97.493333 201.706667-264.426667 176.32-425.28zM741.546667 820.053333c-49.173333 36.266667-103.68 59.84-162.026667 70.08-9.706667 1.28-15.786667-5.44-17.386667-7.573333-2.026667-2.773333-6.293333-9.92-2.133333-18.026667 18.346667-36.053333 19.946667-73.92 4.586667-103.893333-14.08-27.52-41.066667-45.653333-75.84-51.093333-4.586667-0.64-9.173333-1.066667-13.76-1.066667-23.146667 0-45.013333 8.746667-66.24 17.173333-9.813333 3.84-20.053333 8-31.146667 11.413334-65.493333 20.373333-116.48 3.84-147.626667-13.546667-44.693333-24.96-77.546667-67.733333-90.24-117.12-2.88-11.2-5.333333-22.72-7.253333-34.346667-26.453333-159.68 55.573333-323.84 199.36-399.04 112.213333-58.666667 240.853333-60.053333 352.746667-3.733333 112.106667 56.32 187.733333 160.96 207.573333 287.04 21.866667 137.386667-37.333333 280.213333-150.613333 363.733333z" fill="#040000" p-id="7186" data-darkreader-inline-fill="" ></path><path d="M320 416c-70.613333 0-128 57.386667-128 128s57.386667 128 128 128 128-57.386667 128-128-57.386667-128-128-128z m0 192c-35.306667 0-64-28.693333-64-64s28.693333-64 64-64 64 28.693333 64 64-28.693333 64-64 64z" fill="#040000" p-id="7187" data-darkreader-inline-fill="" ></path><path d="M384 288m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#040000" p-id="7188" data-darkreader-inline-fill="" ></path><path d="M640 288m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#040000" p-id="7189" data-darkreader-inline-fill="" ></path><path d="M768 496m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#040000" p-id="7190" data-darkreader-inline-fill="" ></path></svg>
);

const ModifySvg = () => (
    <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5268" data-darkreader-inline-fill="" width="16" height="16"><path d="M816.277333 165.056a128 128 0 0 1 0 181.013333L309.653333 852.693333a21.333333 21.333333 0 0 1-15.082666 6.229334H165.056a42.666667 42.666667 0 0 1-42.666667-42.666667v-129.493333a21.333333 21.333333 0 0 1 6.229334-15.104L635.306667 165.056a128 128 0 0 1 180.992 0z m-45.226666 45.226667a64 64 0 0 0-87.786667-2.56l-2.752 2.56L188.885333 701.930667a8.533333 8.533333 0 0 0-2.496 6.037333v78.464c0 4.714667 3.818667 8.533333 8.533334 8.533333h78.421333a8.533333 8.533333 0 0 0 6.037333-2.517333l491.648-491.605333a64 64 0 0 0 2.581334-87.786667l-2.56-2.730667z" fill="#333333" p-id="5269" data-darkreader-inline-fill="" ></path><path d="M590.016 210.304l181.013333 181.013333-45.248 45.248-181.013333-181.013333z" fill="#333333" p-id="5270" data-darkreader-inline-fill="" ></path><path d="M490.666667 795.733333m8.533333 0l345.6 0q8.533333 0 8.533333 8.533334l0 46.933333q0 8.533333-8.533333 8.533333l-345.6 0q-8.533333 0-8.533333-8.533333l0-46.933333q0-8.533333 8.533333-8.533334Z" fill="#333333" p-id="5271" data-darkreader-inline-fill="" ></path><path d="M661.333333 667.733333m8.533334 0l174.933333 0q8.533333 0 8.533333 8.533334l0 46.933333q0 8.533333-8.533333 8.533333l-174.933333 0q-8.533333 0-8.533334-8.533333l0-46.933333q0-8.533333 8.533334-8.533334Z" fill="#333333" p-id="5272" data-darkreader-inline-fill="" ></path></svg>
)

const LockSvg = () => (
    <svg className="lock_svg__icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="50" height="50"><path d="M153.6 469.312v469.376h716.8V469.312H153.6zM64 384h896v640H64V384zm403.2 329.92c-26.752-14.72-44.8-42.304-44.8-73.92 0-47.104 40.128-85.312 89.6-85.312 49.472 0 89.6 38.208 89.6 85.312 0 31.616-18.048 59.136-44.8 73.92v115.968a44.8 44.8 0 0 1-89.6 0V713.92zM332.8 384h358.4V256c0-94.272-80.256-170.688-179.2-170.688-98.944 0-179.2 76.416-179.2 170.688v128zM512 0c148.48 0 268.8 114.56 268.8 256v128H243.2V256C243.2 114.56 363.52 0 512 0z" fill="currentColor"></path></svg>
)

const StopSvg = () => (
    <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3677" width="20" height="20"><path d="M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024z m3.008-92.992a416 416 0 1 0 0-832 416 416 0 0 0 0 832zM320 320h384v384H320V320z" fill="currentColor" p-id="3678"></path></svg>
)



export const SettingIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={SettingSvg} {...props} />
);

export const RobotIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={RobotSvg} {...props} />
);

export const SummaryIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={SummarySvg} {...props} />
);

export const PolishIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={PolishSvg} {...props} />
);

export const ModifyIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={ModifySvg} {...props} />
);

export const LockIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={LockSvg} {...props} />
);

export const StopIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={StopSvg} {...props} />
);