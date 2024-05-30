import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AcademicSemesterServices } from './academicSemester.service';

const createAAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.createAAcademicSemesterIntoDB(
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester created successfully',
    data: result,
  });
});

const getAllAcademicSemesters = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.getAllAcademicSemestersFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semesters retrieved successfully',
    data: result,
  });
});

const getAAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.getAAcademicSemesterFromDB(
    req.params.semesterId,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester created successfully',
    data: result,
  });
});

const updateAAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.updateAAcademicSemesterIntoDB(
    req.params.semesterId,
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester created successfully',
    data: result,
  });
});
export const AcademicSemesterController = {
  createAAcademicSemester,
  getAllAcademicSemesters,
  getAAcademicSemester,
  updateAAcademicSemester,
};
